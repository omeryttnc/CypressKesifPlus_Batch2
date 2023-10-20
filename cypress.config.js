const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const mysql= require('mysql')

function queryTestDb(query,config){
  const connection = mysql.createConnection(config.env.db)
connection.connect();

return new Promise((resolve,reject)=>{
  connection.query(query,(error,result)=>{
    if(error) reject(error)
    else{
      connection.end()
      return  resolve(result)
    }
  })
})

}



module.exports = defineConfig({
  hideXHR: true,
  chromeWebSecurity: false,
  watchForFileChanges: false,
  viewportHeight: 900,
  viewportWidth: 1600,
  video: false,
  reporter: "cypress-mochawesome-reporter",

  e2e: {
    baseUrl: "https://test.urbanicfarm.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on("task", {
        deleteDownloadFolder() {
          const fs = require("fs");
          fs.readdir("cypress/downloads/", (err, files) => {
            if (err) throw err;
            files.forEach((file) => {
              console.log(file);
              fs.unlink("cypress/downloads/" + file, (err) => {
                if (err) throw err;
              });
            });
          });
          return null;
        },
        log(message){
          console.log("ben bir mesagim : " + message);
          return null
        },
        queryDb:(query)=>{
          return queryTestDb(query,config)
        }

      });

      require("cypress-mochawesome-reporter/plugin")(on);
      allureWriter(on, config);
      return config;
    },
  },
  env:{
    login_url:"/auth/login",
    db:{
      host:"212.47.242.13",
      port:3366,
      user:"urbanicfarm_mysql_user",
      password:"urbanicfarm_mysql_password",
      database: "urbanicfarm"
    }
  }
});
