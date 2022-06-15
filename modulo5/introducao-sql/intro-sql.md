#Exercício 1;
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

#A) VARCHAR = String.
# DATE = data .
# valor passado dentro de (_) siginfica a quantidade máxima de caracteres permitida.

#B) 
#SHOW databases: Retorna todas as DataBases existentes.
SHOW TABLES;#: Retorna todas as tabelas existentes dentro da DataBase atual.

#C) 
#DESCRIBE Actor: Retorna a tabela selecionada, mostrando todos os dados presentes nela (Field, Type, Null, Key, Default, etc.).

#Exercício 2
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

#A)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

#B)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"003",
"Ana Vitória",
1000000,
"1998-08-30",
"male"
);

#Duplicate entry '002' for key 'PRIMARY'.
#Este erro quer dizer que tentamos duplicar o id 002, o que não é possível já que o mesmo é uma chave primária (única).alter
#C)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
#PRIMARYColumn count doesn't match value count at row 1
#contagem não corresponde à contagem de valor na linha 1
#Este erro indica que alguns parametros obrigatórios da tabela não foram passados.
#D)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005",
  "Jorge Aragão",
  400000,
  "1949-04-18", 
  "male"
);
#Field 'name' doesn't have a default value
#O campo 'nome' não tem um valor padrão.
# Este erro indica que o campo nome é obrigatório e não está sendo passado.
#E)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
#Incorrect date value: '1950' for column 'birth_date' at row 1.
#Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1.
#O formato da birth_date foi passado de forma incorreta, deve ser passado como string entre " "
#F)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"007",
"Stephen Curry",
20000000.00,
"1988/03/14",
"male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"008",
"Camila Cabello",
334000000,
"1997/03/03",
"female"
); 


#Exercício 3
SELECT * FROM Actor;
SELECT id, name FROM Actor WHERE gender = "male"; #Retorna os paremetro ID e name da tabela que tiverem a informação "male"
#A)
SELECT * FROM Actor WHERE gender = "female"; #Retorna todos os parametros da tabela que tiverem a informação "female"
#B)
SELECT name, salary FROM Actor WHERE name = "Tony Ramos";
#C)
SELECT * FROM Actor WHERE gender = "invalid"; #Retorna todos os dados vazios pois nenhum ator/atriz possui o parametro  "gender" vazio.
#D)
SELECT id, name, salary FROM Actor WHERE salary <= 500000;
#E)
SELECT id, name FROM Actor WHERE id = "002";
#Unknown column 'nome' ind 'field list'.
#Coluna desconhecida 'nome' ind 'lista de campos'.
#Este erro ocorre pois o paremtro 'nome esta sendo passando de forma incorreta, deveria ser passado como 'name'.

#Exercício 5
SELECT * FROM Actor WHERE ( name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
SELECT * FROM Actor WHERE salary BETWEEN 100000 AND 400000;
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND name NOT LIKE "J%";
#A)
#A primeira query do Ex. retorna todos os nomes que comecem com as letras A ou J e tenham o salário acima de 300000.
#B)
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;
#C)
SELECT * FROM Actor WHERE name LIKE "%G%";
#D)
SELECT * FROM Actor WHERE ( name LIKE "%A%" OR name LIKE "%G%" ) AND salary BETWEEN 350000 AND 900000;

#Exercício 6
DROP TABLE Films;
CREATE TABLE Films (
id VARCHAR(255) PRIMARY KEY,
title VARCHAR (255) NOT NULL UNIQUE,
synopsis TEXT (255) NOT NULL,
release_date DATE NOT NULL,
rating INT (10) NULL
);
#A)
INSERT INTO Films (id, title, synopsis, release_date, rating)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006/06/01",
7
);
#B)
INSERT INTO Films (id, title, synopsis, release_date, rating)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012/12/27",
10
);
#C)
INSERT INTO Films (id, title, synopsis, release_date, rating)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017/11/02",
8
);
#E)
INSERT INTO Films (id, title, synopsis, release_date, rating)
VALUES(
"004",
"O Candidato Honesto",
"João Ernesto conquista grande popularidade como presidente do Sindicato dos Motoristas de Ônibus. Um político corrupto, ele se candidata à Presidência da República. À frente nas pesquisas, João recebe uma feitiço da avó e não consegue mais mentir.",
"2014/09/02",
7
);
