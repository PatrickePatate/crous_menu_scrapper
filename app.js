const express = require('express');
const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");

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
        "cafet_iut": "https://www.crous-bfc.fr/restaurant/cafet-iut/",
        "mansart": "https://www.crous-bfc.fr/restaurant/resto-u-mansart/",
        "montmuzard": "https://www.crous-bfc.fr/restaurant/resto-u-montmuzard/"
    }

    cafetiut = axios.get(restos[resto]).then(function(data){
        const $ = cheerio.load(data.data);

        const jours = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
        const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre'];
        const now = new Date();
        const date = jours[now.getUTCDay()]+" "+now.getDate()+" "+mois[now.getMonth()];
        let today_index = null;


        $('#menu-repas .slides h3').each(function(index){
            datemenu = $(this).html();

            if(datemenu.replace('û','u').includes("Menu du "+date)){
                today_index = index;
            }
        });

        const today_menu = $('#menu-repas .slides > li:nth-child('+(today_index+1)+')');

        const ptidej = $(today_menu).find('.content.clearfix > div:nth-child(1) > .content-repas').html();
        const dej = $(today_menu).find('.content.clearfix > div:nth-child(2) > .content-repas').html();
        const diner = $(today_menu).find('.content.clearfix > div:nth-child(3) > .content-repas').html();

        res.status(200);
        res.send(JSON.stringify({"resto":resto,"title":"Menu du "+date, "ptidej":ptidej, "dej":dej, "diner":diner}));
    }).catch(reason => {
        console.log(reason);
    });
});

app.listen(port,"127.0.0.1", ()=>{
    console.log('server started');
})
