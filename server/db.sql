CREATE TABLE HappinessRanks (
    overallRank INTEGER PRIMARY KEY,
    country VARCHAR(100),
    score NUMERIC(10,4),
    gdpPerCapita NUMERIC(10,4),
    socialSupport NUMERIC(10,4),
    healhtyLifeExpectancy NUMERIC(10,4),
    freedomToMakeLifeChoices  NUMERIC(10,4),
    generosity  NUMERIC(10,4),
    perceptionsOfCorruption  NUMERIC(10,4)
);
