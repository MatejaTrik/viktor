VIKTOR DEBIL

Uvek pazis da nikad nisi na MAIN grani.

git checkout MAIN
git checkout SUBMAIN
git checkout LESSON

git add *
git commit -m "ime-grane"
git push origin LESSON

____________GRANE____________
Svaki kurs je nova grana - koja nosi ime kursa - tzv SUBAMAIN
Svaka lekcija je nova grana, koja je izvucena iz gore navedenoj - koja nosi ime lekcije. - tzv LESSON

*Jedinu granu koju smes da pushujes na main - jeste SUBMAIN
nakon sto je pushujes pravis pull request i ja mergujem tek kad odobrim.

*Sve ostale LESSON grne pushujes iskljucivo na SUBMAIN grane iz koje je izvucena

____________PULL REQUESTO____________
*Pull request se uvek pravi iz LESSON grane na SUBMAIN granu te lekcija (LESSON-a). 

Naziv - PR-a Prvo ide datum dd.mm.yyyy - srpski, zatim ime lekcije.

Description - Ukratko sta si radio i sta si presao u tom LESSON-u.

MEGE - NIKAD NIKAD NIKAD NE MERGAS BEZ MOG OVERA - NIKAD!!!


