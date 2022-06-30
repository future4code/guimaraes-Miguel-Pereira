#Exercício 1
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
	comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Films(id)
);

SELECT * FROM Rating;
SELECT * FROM Films;
SELECT * FROM Actor;
#A) Chave estrangeira é um id usado para relacionar duas tabelas diferentes.
#B)
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"001",
    "Muito bom!",
    7,
	"004"
);
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"002",
    "Adorei.",
    8,
	"005"
);
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"003",
    "Genial!",
    9.5,
	"002"
);
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"004",
    "Gostei.",
    6,
	"003"
);
#C) 
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"006",
    "Gostei.",
    6,
	"001"
);
#Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails 
#Não foi possível fazer essa inserção pois a chave estrangeira com este id não existe.
#D)
ALTER TABLE Films DROP rating;
#E)
#Exercício 2
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Films(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
#A) Está é uma tabela que retorna o elenco de algum filme, nela podemos relacionar por chave estrangeiras
# varios filmes à um ator/atriz ou o contrário.
#B)
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "002"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "001"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "006"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"002",
    "001"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"002",
    "12"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"002",
    "002"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"005",
    "12"
);
#C)Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails
# Não podemos criar uma relação com um chave estrangeira inexistente.
#D)
DELETE FROM Actor
WHERE id = "12";
#Não é possivel excluir um Ator cujo o id esteja relacionado em outra tabela.
#Exercício 3
SELECT * FROM Films 
INNER JOIN Rating ON Films.id = Rating.movie_id;
#A) Esse operador indica que estamos pegando as avaliações a partir do id dos filmes.
#B)
SELECT movie_id, title, rate FROM Films 
INNER JOIN Rating ON Films.id = Rating.movie_id;
