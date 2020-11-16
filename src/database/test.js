const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async(db) => {
     await saveOrphanage(db, {
        lat: "-22.7489239",
        lng: "-47.3330475",
        name: "Lar das meninas",
        about: "Presta assistência a crianças de 04 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
        whatsapp: "993990316",
        images: [
            "https://images.unsplash.com/photo-1563465814437-b1a057a461ed?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1594575111057-47b35c5f98f7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas Das 20h até 8h",
        open_on_weekends: "0"
     })

   
    // console.log( await db.run("DELETE FROM orphanages WHERE id='4'"))
    const selectedOrphanages = await db.all("SELECT *FROM orphanages")
    console.log(selectedOrphanages)
})