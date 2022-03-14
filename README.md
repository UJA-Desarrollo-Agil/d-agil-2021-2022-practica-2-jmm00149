# Práctica 2 Desarrollo Ágil

## Índice

* [Autor](#autor)


## Autor

* **nombre**: Juan Moya Moya 
* **correo**:jmm00149@red.ujaen.es
* **GitHub**:https://github.com/jmm00149
* **Trello**:https://trello.com/b/6FVxYQIR/proyecto
* **Telegram**:@juanmoya8



## Deploying

To deploy your game, just upload your HTML file and the `media` folder
to your webserver. You can serve several games with the same look and
feel from the same directory. You need a different HTML file for each
game, and each one should load the correct `.game.js` file at the
end. Add any media you need for your game (images, audio, video), and
the remaining files will be reused.

For example, if you had 3 games: `episode1`, `episode2`, and
`christmas-special`. You'd have a directory structure:

    episode1.html
    episode2.html
    christmas-special.html
    media/
        css/ ...
        img/ ...
        js/
            jquery-1.4.2.min.js
            undum.js
        games/
            episode1/
                episode1.game.js
                ... media for episode 1 ...
            episode2/
                episode2.game.js
                ... media for episode 1 ...
            christmas-special/
                christmas-special.game.js
                ... media for christmas special ...

This assumes you use the same directory lay out that I do. You are
welcome to change things around, of course, as long as you work and
change the references.


## Undum

The name `undum` came from a little project that preceded this code
base. In 2008 I put together a simple browser based game. It was
narrative, but used the grind-based mechanics of games such as
Farmville and Mafia Wars. Because of the grinding, I called it
Carborundum, which I found I couldn't type at speed, so it became
Undum. The code has changed out of all recognition since them, as the
grind-based game moved to Flash. But the name stuck for the Javascript
framework.


## License

The code, documentation, styles, design and images are all distributed
under the MIT license. This permits you to modify and use them, even
for commercial use. A copy of the MIT license is found in the LICENSE
file.
