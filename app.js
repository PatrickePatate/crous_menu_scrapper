const express = require('express');
const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");
const path = require('path');

const app = express();
const port = 8056;

app.get('/',(req,res) => {
    if(req.query.resto == null){
        res.status(404);
        res.send(JSON.stringify({"status":"error",'msg':"Merci de spécifier un restaurant en utilisant le paramètre resto (cafet_iut, mansart, montmuzard)"}));
        return;
    }
    const resto = req.query.resto;


    const restos = {
        "cafet_iut": "https://www.crous-bfc.fr/restaurant/cafet-iut-2/",
        "cafet_mansart": "https://www.crous-bfc.fr/restaurant/cafet-mansart-2/",
        "cafet_des_sports": "https://www.crous-bfc.fr/restaurant/cafet-des-sports-2/",
        "cafet_droit_lettres": "https://www.crous-bfc.fr/restaurant/cafet-droit-lettres-2/",
        "mansart": "https://www.crous-bfc.fr/restaurant/resto-u-mansart-2/",
        "montmuzard": "https://www.crous-bfc.fr/restaurant/resto-u-montmuzard-2/",
        "crousty_truck": "https://www.crous-bfc.fr/restaurant/crousty-truck-2/"
    }

    cafetiut = axios.get(restos[resto]).then(function(data){
        const $ = cheerio.load(data.data);

        const jours = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
        const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre'];
        const now = new Date();
        const date = jours[now.getUTCDay()]+" "+now.getDate()+" "+mois[now.getMonth()];
        let today_index = null;
        let ptidej = "Non renseigné";
        let dej = "Non renseigné";
        let diner = "Non renseigné";

        $('.menu .menu_date_title').each(function(index){
            datemenu = $(this).html();

            if(datemenu.replace('û','u').includes("Menu du "+date)){
                today_index = index;
            }
        });


        const today_menu = $('.menu:nth-child('+(today_index+1)+')');
        $(today_menu).find('.meal').each(function (index){
           var title  = $(this).find('.meal_title').text();
           if(title=="Déjeuner"){
               dej = $(this).find('.meal_foodies').html();
           }
            if(title=="Petit-déjeuner"){
                ptidej = $(this).find('.meal_foodies').html();
            }
            if(title=="Dîner"){
                diner = $(this).find('.meal_foodies').html();
            }
        });


        res.status(200);
        res.send(JSON.stringify({"resto":resto,"title":"Menu du "+date, "ptidej":ptidej, "dej":dej, "diner":diner, "url":restos[resto]}));
    }).catch(reason => {
        console.log(reason);
    });
});

app.get('/map.jpg', function (req, res){
    res.sendFile(path.resolve(__dirname, './map.jpg'));
})

app.listen(port,"127.0.0.1", ()=>{
    console.log('server started');
})
