# crous_menu_scrapper
Get informations from CROUS restaurants pages and turn them into an API

## FR
### Utilisation
Le scrapper est codé pour fonctionner sur les 3 principaux Restaurants Universitaires de Dijon. Chaque page CROUS peut potentiellement être construite différemment et donc le code du scrapper de chaque restaurant est plus ou moins unique, cependant, sur les 3 R.U Dijonnais présent dans ce repo, le scrapper fonctionne *quasiment* pareil.

### Principale variable d'ajustement pour adapter mon scrapper à votre Resto U
l'élément principal à adapter selon les résultats obtenus avec mon code est cette ligne :
```
// getting today menu infos
$bs = $document->getElementById('menu-repas')->childNodes->item(1)->childNodes->item(0)->getElementsByTagName('li');
```
(qui n'est d'ailleurs pas la même pour les 3 R.U)

En effet, cette ligne de code interprète le code HTML et navigue dedans pour aller chercher les éléments de la liste du menu. Parfois, d'une page à l'autre, la disposition des éléments de la liste du menu changent, il faut alors modifier ce selecteur.
Vous pouvez vous renseigner sur comment fonctionne ce selecteur grâce à la documentation PHP : [DOM documentation](https://www.php.net/manual/fr/book.dom.php)

### API publique pour les R.U Dijonnais
Je vais essayer de maintenir une version fonctionnelle et en ligne de cette API pour les Restaurants Universitaires Mansart, Montmuzard et la caféteria CROUS de l'IUT de Dijon ici :
[CAFET IUT : https://lucienpuget.fr/api/crous/cafetiut.php](https://lucienpuget.fr/api/crous/cafetiut.php)
[MANSART : https://lucienpuget.fr/api/crous/cafetiut.php](https://lucienpuget.fr/api/crous/mansart.php)
[MONTMUZARD : https://lucienpuget.fr/api/crous/montmuzard.php](https://lucienpuget.fr/api/crous/montmuzard.php)

## EN
### Usage
This scrapper is coded to work on the 3 major uni restaurants of Dijon (21000, France). Every CROUS page can potentially work differently from the other ones, so the scrapper's code is more or less unique for every uni restaurant. However, in this repo, the scrapper's code for each restaurant is *nearly* the same.


### Main way to adapt this scrapper to your CROUS restaurant
The main element that make this scrapper working and that you'll need to modify to adapt it is this lign of code :
```
// getting today menu infos
$bs = $document->getElementById('menu-repas')->childNodes->item(1)->childNodes->item(0)->getElementsByTagName('li');
```
(This line is not the same for the 3 restaurants in this repo, you can take a look at it)

Indeed, this lign process the HTML code and navigate in it to get the elements of the menu list. Sometimes, from a CROUS page to another, the disposition of the elements can change, you'll therefore have to modify this lign to adapt it.
You can get informations about what makes this lign work from the PHP documentation : [DOM documentation](https://www.php.net/manual/fr/book.dom.php)

### Public API for Dijon (21000, France)
I will try to maintain online and working an accessible version of this scrapper for the 3 main restaurants of Dijon :
[CAFET IUT : https://lucienpuget.fr/api/crous/cafetiut.php](https://lucienpuget.fr/api/crous/cafetiut.php)
[MANSART : https://lucienpuget.fr/api/crous/cafetiut.php](https://lucienpuget.fr/api/crous/mansart.php)
[MONTMUZARD : https://lucienpuget.fr/api/crous/montmuzard.php](https://lucienpuget.fr/api/crous/montmuzard.php)