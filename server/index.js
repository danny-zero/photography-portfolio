//getting images from folder: type node server to run server/index.js then hit routes in browser
const axios = require('axios');
const express = require('express');
const { static } = express;
const path = require('path');
const fs = require('fs');
const app = express();

app.get('/folder/:folderName', (req, res, next) => {
    try {
        const folderName = req.params.folderName
        const imagesArr=[];
        let str = ''
        const images = path.join(__dirname, `../assets/photos/${folderName}`)
        console.log(images)
        fs.readdir(images, (err, files) => {
            try {
               files.forEach((file) => {
                   if (file !== '.DS_Store') {
                    const imgTag = `&lt;img onclick='openModal()' class='img-thumb' src='/assets/photos/${folderName}/${file}' /&gt;`
                    console.log(imgTag)
                    imagesArr.push(imgTag)
                    str += `${imgTag}</br>`
                   }
               }) 
               res.send(str)
            } catch (error) {
                console.log('files error', error)
            }
        })
    } catch (error) {
        console.error(error)
    }
});

app.get('/nav', (req, res, next) => {
    try {
        let str = ''
        const pages = path.join(__dirname, '../pages');
        console.log(pages)
        fs.readdir(pages, (err, files) => {
            try {
                files.forEach((link) => {
                    //<li class='nav-link' value='japan'><a href="/pages/japan.html">Japan</a></li>
                    console.log(link)
                    let name = link.split('.')[0]
                    if (name === 'nyc') name = 'New York'
                    const li = `&lt;li class="nav-link" value="${name}"&gt;&lt;a href="/pages/${link}"&gt;${name}&lt;/a&gt;&lt;/li&gt;`
                    str += `${li}<br/>`
                })
                str += `&lt;li class='nav-link'&gt;&lt;a href="https://instagram.com/danny_l_photography" target="_blank" rel="noopener noreferrer"&gt;Instagram&lt;/a&gt;&lt;/li&gt;<br/>`
                str += `&lt;li class='nav-link'&gt;&lt;a href="https://www.etsy.com/shop/DannyLPhotoandDesign" target="_blank" rel="noopener noreferrer"&gt;Shop&lt;/a&gt;&lt;/li&gt;<br/>`
                res.send(str)
            } catch (error) {
                console.log('nav readdir error', error)
            }
        })
    } catch (error) {
        console.error('nav error', error)
    }
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})
