USE `guimaraes-4211415-miguel-pereira`;
SET SQL_SAFE_UPDATES = 0;

SELECT * FROM Films;
SELECT * FROM Actor;

ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

#Exercício 1
#A) Este comando deleta a coluna "salary" da tabela "Actor".
#B) Este comando altera a coluna "gender" para que ela aceite strings de no máx 6 caracteres.
#C)
ALTER TABLE Actor MODIFY gender VARCHAR(100);

#Exercício 2
#A)
UPDATE Actor
SET 
name = "Gabriele Bueno",
birth_date = "2000-03-08"
WHERE id = "003";
#B)
UPDATE Actor
SET
name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET
name = "Juliana Paes"
WHERE name = "JULIANA PAES";
#C)
UPDATE Actor
SET
name = "Miguel Tocchetto",
salary= 2000000,
birth_date= "1998-08-30",
gender= "male",
favorite_ice_cream_flavor= "Cream" 
WHERE id = "005";
#D)
UPDATE Actor
SET 
name = "Raul Seixas"
WHERE id = "010";
#Aqui ele permite o comando de atualização, mas nenhum dado é modificado já que este ID não existe.
UPDATE Actor
SET
job = "Cantor"
WHERE id = "003";
#Aqui ele gera um erro, pois a coluna "job" não existe dentro da tabela "Actor".
UPDATE Actor
SET 
name = "Raul Seixas"
WHERE id = 001;
#Aqui ele permite e altera o "name" do ator de id: 1, mesmo passando esse id como INT ????.

#Exercício 3
#A)
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
#B)
DELETE FROM Actor WHERE gender = "male" AND salary >= 1000000;

#Exercício 4
SELECT COUNT(*) FROM Actor;
SELECT COUNT(*) FROM Actor WHERE gender = "female";
SELECT AVG(salary) FROM Actor;
#A)
SELECT MAX(salary) FROM Actor ;
#B)
SELECT MIN(salary) FROM Actor WHERE gender= "female";
#C)
SELECT COUNT(*) FROM Actor WHERE gender = "female";
#D)
SELECT SUM(salary) FROM Actor;

#Exercício 5
SELECT * FROM Actor LIMIT 3;
SELECT * FROM Actor ORDER BY name ASC;
SELECT * FROM Actor ORDER BY name ASC LIMIT 4;
SELECT * FROM Actor
WHERE gender = 'female'
ORDER BY name ASC
LIMIT 4;
#A) Nesta query ele seleciona todos os componentes de "Actor" onde "gender" é igual a "female"
# ordenando em forma ascendente (alfabetica neste caso) no máximo 4 atrizes.
#B)
SELECT name, id FROM Actor
ORDER BY name DESC;
#C)
SELECT id, name, salary FROM Actor
ORDER BY salary ASC;
#D)
SELECT id, name, salary FROM Actor
ORDER BY salary DESC
LIMIT 3;
#E)
SELECT AVG(salary) FROM Actor
WHERE gender = "female";
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

#Exercício 6
SELECT * FROM Films;
#A)
ALTER TABLE Films ADD playing_limit_date VARCHAR(250);
#B)
ALTER TABLE Films MODIFY rating FLOAT;
#C)
UPDATE Films
SET 
playing_limit_date = "2022/08/15"
WHERE title = "O candidato honesto";
UPDATE Films
SET 
playing_limit_date = "2019/07/10"
WHERE title = "doce de mãe";
#D)
DELETE title, synopsis, release_date, rating FROM Films
WHERE id = "003";