# crous_menu_scrapper
Get informations from CROUS restaurants pages and turn them into an API<br/>
Uses **NodeJs** *(instead of the previous version that used PHP)*

Add my Discord BOT into your server ! [Click here](https://discord.com/api/oauth2/authorize?client_id=903576717728296980&permissions=2147575808&scope=bot)

## FR
### Utilisation
Le scrapper est codé pour fonctionner sur les 3 principaux Restaurants Universitaires de Dijon. Chaque page CROUS peut potentiellement être construite différemment, à vous d'adapter le scrapper à vos restaurants dans le cas où il ne fonctionnerait pas nativement.

J'ai également développé un bot discord afin d'obtenir le menu du jour des différents R.U et cafet's de Dijon, ajoute le à ton serveur [ici](https://discord.com/api/oauth2/authorize?client_id=903576717728296980&permissions=2147575808&scope=bot)

### Principale variable d'ajustement pour adapter mon scrapper à votre Resto U
l'élément principal à adapter selon les résultats obtenus avec mon code est cette ligne :
```
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
```


En effet, cette ligne de code interprète le code HTML et navigue dedans pour aller chercher les éléments de la liste du menu. Parfois, d'une page à l'autre, la disposition des éléments de la liste du menu changent, il faut alors modifier ce selecteur.


### API publique pour les R.U Dijonnais
Je vais essayer de maintenir une version fonctionnelle et en ligne de cette API pour les Restaurants Universitaires Mansart, Montmuzard et la caféteria CROUS de l'IUT de Dijon ici :<br/>
[CAFET IUT : http://crous.lucienpuget.fr/?resto=cafet_iut](http://crous.lucienpuget.fr/?resto=cafet_iut)<br />
[MANSART : http://crous.lucienpuget.fr/?resto=mansart](http://crous.lucienpuget.fr/?resto=mansart)<br/>
[MONTMUZARD : http://crous.lucienpuget.fr/?resto=montmuzard](http://crous.lucienpuget.fr/?resto=montmuzard)<br/>

## EN
### Usage
This scrapper is coded to work on the 3 major uni restaurants of Dijon (21000, France). Every CROUS page can potentially work differently from the other ones, so the scrapper's code is more or less unique for every uni restaurant. 


### Main way to adapt this scrapper to your CROUS restaurant
The main element that make this scrapper working and that you'll need to modify to adapt it are these lignes of code :
```
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
```

Indeed, these lignes process the HTML code and navigate into it to get the elements of the menu list. Sometimes, from a CROUS page to another, the disposition of the elements can change, you'll therefore have to modify these lignes to adapt it.

### Public API for Dijon (21000, France)
I will try to maintain online and working an accessible version of this scrapper for the 3 main restaurants of Dijon :<br/>
[CAFET IUT : http://crous.lucienpuget.fr/?resto=cafet_iut](http://crous.lucienpuget.fr/?resto=cafet_iut)<br />
[MANSART : http://crous.lucienpuget.fr/?resto=mansart](http://crous.lucienpuget.fr/?resto=mansart)<br/>
[MONTMUZARD : http://crous.lucienpuget.fr/?resto=montmuzard](http://crous.lucienpuget.fr/?resto=montmuzard)<br/>
