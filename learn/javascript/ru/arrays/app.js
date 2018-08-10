"use strict";

let currentStructure = [], previousStructure = [], columnsUsedInWidgets = [], structureComparingResult = [];
let idOfCurrentStructure = [], idOfPreviousStructure = [];

currentStructure.push({
        "_id": "REP_NUMERIC",
        "id": "REP_NUMERIC",
        "title": "REP_NUMERIC",
        "type": "char"
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
        "type": "numeric"
    },
    {
        "_id": "REP_NEW_COLUMN",
        "id": "REP_NEW_COLUMN",
        "title": "REP_NEW_COLUMN",
        "type": "numeric"
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

columnsUsedInWidgets.push("REP_CHAR", "REP_NUMERIC", "REP_INT", "REP_DATE");


structureComparingResult.isAnyUsedColumnsWereRemoved = false;
structureComparingResult.isAnyUsedColumnsHaveDifferentTypes = false;

currentStructure.forEach(function (currentValue) {
    idOfCurrentStructure.push(currentValue._id);
});

previousStructure.forEach(function (currentValue) {
    idOfPreviousStructure.push(currentValue._id);
});

idOfCurrentStructure.forEach(function (columnId) {
    let column = findElement(currentStructure, "_id", columnId);
    if (!idOfPreviousStructure.includes(columnId)) {
        column.isNew = true;
    } else {
        let previousColumn = findElement(previousStructure, "_id", columnId);
        column.previousType = previousColumn.type;
        if (column.type != column.previousType) {
            column.isDifferentType = true;
            if (!structureComparingResult.isAnyUsedColumnsHaveDifferentTypes && columnsUsedInWidgets.includes(column._id)) {
                structureComparingResult.isAnyUsedColumnsHaveDifferentTypes = true;
            }
        }
    }
    structureComparingResult.push(column);
});

idOfPreviousStructure.forEach(function (columnId) {
    if (idOfCurrentStructure.includes(columnId)) {
        return;
    }
    let column = findElement(previousStructure, "_id", columnId);
    column.isRemoved = true;
    if (!structureComparingResult.isAnyUsedColumnsWereRemoved && columnsUsedInWidgets.includes(column._id)) {
        structureComparingResult.isAnyUsedColumnsWereRemoved = true;
    }
    structureComparingResult.push(column);
});

function findElement(array, key, value) {
    return array.find(function (element) {
        if (element[key] == value) {
            return element;
        }
    });
}

console.log(structureComparingResult);
