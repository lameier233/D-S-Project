CREATE TABLE turbine (
 turbineId char(10) NOT NULL,
 turbineName varchar(80) NOT NULL,
 turbineDescription varchar(800) NOT NULL,
 capacity int NOT NULL,
 rampUpTime int NOT NULL,
 maintenanceInterval int NOT NULL
);

CREATE TABLE client (
  clientId char(10) NOT NULL,
  clientName varchar(80) NOT NULL,
  clientDescription varchar(800) NOT NULL,
  gicSubIndustry varchar(20) NOT NULL,
  headquarters varchar(40) NOT NULL
);

CREATE TABLE sensor (
  sensorId char(10) NOT NULL,
  sensorName varchar(80) NOT NULL,
  sensorDescription varchar(800) NOT NULL,
  manufacturer varchar(60) NOT NULL,
  totslLifeExpectancyHours int NOT NULL
);

CREATE TABLE sensorDeployed (
  sensorDeployedId char(10) NOT NULL,
  sensorId char(10) NOT NULL,
  turbineDeployed varchar(80) NOT NULL,
  serialNumber varchar(80) NOT NULL,
  deployedDate varchar(30) NOT NULL
);

todo
CREATE TABLE sensorTimeSeries (
  sensorDeployedId char(10) NOT NULL,
  dataCollectedDate DATE NOT NULL,
  output decimal (20,15) NOT NULL,
  heatrate decimal(20,15) NOT NULL,
  compressorEfficiency decimal(20,15) NOT NULL,
  availability decimal(20,15) NOT NULL,
  reliability decimal(20,15) NOT NULL,
  firedHours decimal(20,15) NOT NULL,
  trips varchar(80) NOT NULL,
  starts varchar(80) NOT NULL
);

CREATE TABLE site (
  siteId char(10) NOT NULL,
  clientId char(10) NOT NULL,
  siteName varchar(80) NOT NULL,
  siteDescription varchar(800) NOT NULL,
  primaryContact varchar(30) NOT NULL,
  capacity int(30) NOT NULL,
  commercialDate DATE NOT NULL,
  addrLine1 varchar(40) NOT NULL,
  addrLine2 varchar(30) NULL,
  addrCity varchar(30) NOT NULL,
  addrState varchar(30) NOT NULL,
  addrZip int NOT NULL,
  addrCountry varchar(30) NOT NULL

);

CREATE TABLE turbineDeployed (
  turbineDeployedId char(10) NOT NULL,
  turbineId varchar(80) NOT NULL,
  siteId varchar(80) NOT NULL,
  serialNumber varchar(60) NOT NULL,
  deployedDate DATE NOT NULL,
  totalFiredHours int NOT NULL,
  totalStarts int NOT NULL,
  lastPlannedOutageDate DATE NOT NULL,
  lastUnplannedOutageDate DATE NULL

);
