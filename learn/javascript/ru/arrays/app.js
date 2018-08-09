"use strict";

var currentStructure = [], previousStructure = [], columnsUsedInWidgets = [], result = [];

currentStructure.push({
        "_id": "REP_NUMERIC",
        "id": "REP_NUMERIC",
        "title": "REP_NUMERIC",
        "type": "char",
        "previousType": "numeric",
        "isDifferentType": "Y",
        "isNew": "N"
    },
    {
        "_id": "REP_INT",
        "id": "REP_INT",
        "title": "REP_INT",
        "type": "char",
        "previousType": "char",
        "isDifferentType": "N",
        "isNew": "N"
    },
    {
        "_id": "REP_CHAR",
        "id": "REP_CHAR",
        "title": "REP_CHAR",
        "type": "numeric",
        "previousType": "char",
        "isDifferentType": "Y",
        "isNew": "N"
    },
    {
        "_id": "REP_NEW_COLUMN",
        "id": "REP_NEW_COLUMN",
        "title": "REP_NEW_COLUMN",
        "type": "numeric",
        "previousType": "numeric",
        "isDifferentType": "N",
        "isNew": "Y"
    });

previousStructure.push({
        "_id": "REP_NUMERIC",
        "id": "REP_NUMERIC",
        "title": "REP_NUMERIC",
        "type": "numeric"
    },
    {
        "_id": "REP_INT",
        "id": "REP_INT",
        "title": "REP_INT",
        "type": "char"
    },
    {
        "_id": "REP_CHAR",
        "id": "REP_CHAR",
        "title": "REP_CHAR",
        "type": "char"
    },
    {
        "_id": "REP_DATE",
        "id": "REP_DATE",
        "title": "REP_DATE",
        "type": "char"
    });

columnsUsedInWidgets.push(["REP_CHAR", "REP_NUMERIC", "REP_INT", "REP_DATE"]);

console.log("currentStructure:", currentStructure);
console.log("previousStructure:", previousStructure);
console.log("columnsUsedInWidgets:", columnsUsedInWidgets);

