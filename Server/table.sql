  CREATE TABLE ToDo
 (
     ItemID serial NOT NULL PRIMARY KEY,
     Item Varchar(255) NOT NULL,
     IsDone boolean NOT NULL DEFAULT false
 );

