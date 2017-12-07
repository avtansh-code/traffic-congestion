DROP TABLE IF EXISTS traffic_data;

CREATE TABLE traffic_data(location varchar(50) NOT NULL,currSpeed int(11) NOT NULL,normSpeed int(11) NOT NULL,date date NOT NULL,time time NOT NULL,cong_percent double DEFAULT NULL,PRIMARY KEY (location,date,time));

delimiter $

CREATE TRIGGER calc_cong BEFORE INSERT ON traffic_data FOR EACH ROW BEGIN SET NEW.cong_percent=((NEW.normSpeed-NEW.currSpeed)/NEW.normSpeed)*100; END$

delimiter ;

INSERT INTO traffic_data(location,currSpeed,normSpeed,date,time) SELECT 'Civil Lines',currSpeed,normSpeed,date,time from CivilLines;
INSERT INTO traffic_data(location,currSpeed,normSpeed,date,time) SELECT 'Gurugram',currSpeed,normSpeed,date,time from Gurugram;
INSERT INTO traffic_data(location,currSpeed,normSpeed,date,time) SELECT 'Hauz Khas',currSpeed,normSpeed,date,time from HauzKhas;
INSERT INTO traffic_data(location,currSpeed,normSpeed,date,time) SELECT 'Model Town',currSpeed,normSpeed,date,time from ModelTown;
INSERT INTO traffic_data(location,currSpeed,normSpeed,date,time) SELECT 'Mukarba Chowk',currSpeed,normSpeed,date,time from MukarbaChowk;
INSERT INTO traffic_data(location,currSpeed,normSpeed,date,time) SELECT 'Najafgarh',currSpeed,normSpeed,date,time from Najafgarh;
INSERT INTO traffic_data(location,currSpeed,normSpeed,date,time) SELECT 'Noida',currSpeed,normSpeed,date,time from Noida;
INSERT INTO traffic_data(location,currSpeed,normSpeed,date,time) SELECT 'Punjabi Bagh',currSpeed,normSpeed,date,time from PunjabiBagh;
INSERT INTO traffic_data(location,currSpeed,normSpeed,date,time) SELECT 'Saraswati Vihar',currSpeed,normSpeed,date,time from SaraswatiVihar;
INSERT INTO traffic_data(location,currSpeed,normSpeed,date,time) SELECT 'Seelampur',currSpeed,normSpeed,date,time from Seelampur;



