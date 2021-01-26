CREATE TYPE COURSETYPE FROM VARCHAR(100);

CREATE RULE course_rule  
AS   
@list IN ('General Elective', 'Humanity & Social Elective',
    'Basic Required', 'Basic Elective',
    'Major Required', 'Major Elective',
    'General Required');  

USE master;
GO
EXEC sp_bindrule 'course_rule', 'COURSETYPE';

CREATE TYPE REQUIREMENT AS OBJECT (
    type COURSETYPE,
    credit INTEGER
);

CREATE TABLE Student(
    id INTEGER PRIMARY KEY,
    courses ,
    department TEXT,
    minor TEXT
);

CREATE TABLE Course(
    name TEXT,
    credit INTEGER,
    department TEXT,
    type COURSETYPE
);

CREATE TABLE Department(
    name TEXT,
    advance_major_requirement REQUIREMENT[],
    major_requirement REQUIREMENT[],
    minor_requirement REQUIREMENT[]
);

-- DOWN

DROP TABLE Student;
DROP TABLE Course;
DROP TABLE Department;
