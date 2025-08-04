# a Tracery based bot/web generator template

everything is presented super bare bones with no CSS or page styling, but you can add all of that on you own once the bot is set up. pretty much everything in the .html file is up to you, as long as that one div table is left unchanged. (and really if you know a bit about JS and HTML stuff, you can probably figure out how to fiddle with that as well)

you should be able to just copy and paste your Tracery code from [CBTS](https://cheapbotstootsweet.com/) or [BBDQ](https://bluebotsdonequick.com/) directly into the Tracery.txt file and everything should work

all the files need to be in the same folder, and you should probably change "BotName" in the file names to match your bot/generator, especially if you plan on having multiple generator pages located in the same folder.

you can even continue to edit your Tracery and check your outputs just by putting the folder with the files on your computer and opening the html file with your browser and reloading the page whenever you make a change (after saving the .txt file, obv.)

the Tracerynode.js file is a direct copy of the node.js version of Tracery from [here](https://github.com/v21/Tracery), it was pretty much the only version that i could get to work properly. you shouldn’t really need to touch it or the Script.js file. just make sure it is in that same folder as your .html file and you link it properly in your html `<script>` tags.