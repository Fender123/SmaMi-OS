/**
 * Created by Michael on 01.03.2016.
 */
var db = require('./db.js');
var Promise = require('promise');

const KEY = 'pageSettings';

function getSettings(){
    return new Promise(function(resolve, reject) {
        db.get('pageSettings').then(function(doc){
            resolve(doc);
        }).catch(function(){
            resolve(null);
        });
    });
}

function updateSettings(field, value){
    return new Promise(function(resolve, reject) {
        getSettings().then(function(doc){
            if(!doc || !doc._rev){
                doc = {
                    _id: KEY
                };
            }
            doc[field] = value;
            db.put(doc).then(function(){
                resolve(doc);
            });
        });
    });
}

module.exports = {
    "get": function(){
        return getSettings();
    },
    "update": function(field, value){
        return updateSettings(field, value);
    }
};