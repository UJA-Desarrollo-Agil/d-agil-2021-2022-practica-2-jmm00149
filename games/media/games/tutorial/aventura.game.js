// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>Comienzo</h1>\
		<div align='center'><img src='./media/img/inicio.jpg'></div>\
        Te levantas un Sábado, es temprano , aunque no tienes que ir a trabajar no puedes seguir durmiendo,\
        te sientes con mucha energía y decides despertar a tu pareja, sorprendida, pregunta qué ocurre,\
        es entonces cuando le propones pasar un día fuera de casa, lo que le sorprende aún más ya que hoy había carrera de Fórmula 1\
		Piensas entonces en dos planes que te apetecían mucho:\
		<p class='transient'><a href='castillo'>castillo</a> de Santa Catalina, donde interpretan escenas inspiradas en la época medieval \
		o tal vez ver el espectáculo musical que se va a realizar en el <a href='bulevar'> bulevar</a>,\
        \
		"
    ),

    
    situations: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations").html());
        },
        tags: ["topic"],
        optionText: "What Undum Games are Made Of",
        displayOrder: 1
    }),
	"castillo": new undum.SimpleSituation(
	
       " <img class='img-situation' src='./media/img/castillo.jpg'>\
	   <p>Cuando tu pareja escucha la palabra castillo se emociona de tal manera que cuesta entenderla al hablar,\
		ya que nunca había estado allí, al verla tan féliz recuerdas lo mucho que la quieres y te entran ganas de subir\
		. Sin embargo, recuerdas que el espectáculo es a las 17:00, por lo que debes pensar que hacer para ganar tiempo,\
		es entonces cuando recuerdas que tu profesor de desarrollo ágil te recomendó un maravilloso restaurante en el centro.\
		No obstante, tu pareja quiere comer en el propio restaurante del castillo y tú, a sabiendas de los precios de ese lugar,.\
		entras en el dilema de seguir el infinito conocimiento de tu <a href='profesor'> profesor</a>, o hacerle caso a tu  <a href='pareja'>pareja.</a>\
		 </p>",
		 {
            heading: "Subir al Castillo",
            diplayOrder: 1,
            tags: ["topic"]
        }
),
"bulevar": new undum.SimpleSituation(
        "<img class='img-situation' src='./media/img/bule.jpg'>\
		<p>Decidís que el plan del musical es más tranquilo y asequible para el día y trás una ligera comida en el bar de siempre, os apresurais para llegar.\
		Cuando llegas, te quedas muy sorprendido por lo que tus ojos están viendo, el musical en cuestión se inspira en tu peli favorita 'Grease' por lo que llevado por la emoción piensas en <a href='bailar'> subir y darlo todo.</a> o quedarte sentado <a href='sentado'> y no avergonzar a tu pareja.</a>\
		 </p>",
		 {
            heading: "Subir al Bulevar",
            diplayOrder: 1,
            tags: ["topic"]
        }
),

"bailar": new undum.SimpleSituation(
        "<img class='img-situation' src='./media/img/grease.jpg'>\
		<p> Hablas con el responsable del musical y sorprendentemente te deja intervenir en una pequeña parte del espectáculo.\
		Es tu momento, estás preparado para hacerlo, cuando suena la música, los focos se centran en ti, es entonces cuando te dispones a dar el primer paso, sin embargo, no te has fijado que tenías un cable de luz delante, tropiezas y caes del escenario, por lo que solo puedes bailar en la sala de esperas de urgencias. Fin\
		 </p>",
		 {
            heading: "Tu momento",
            diplayOrder: 1,
            tags: ["topic"]
        }
),

"sentado": new undum.SimpleSituation(
        "<p> Decides quedarte sentado, más tranquilo, aunque con el ritmo recorriendo todo tu cuerpo, lo sientes, te emocionas y finalmente lloras al acabar la función.\
		Decepcionado contigo mismo por no haber dado el paso, decides dar un cambio de rumbo en tu vida y piensas que es muy inteligente dejar la carrera de informática y apuntarte a una academia de artes escénicas y cumplir tu sueño. Fin\
		 <div align='center'><img src='./media/img/fin.jpg'></div></p>",
		 {
            heading: "final",
            diplayOrder: 1,
            tags: ["topic"]
        }
),

"profesor": new undum.SimpleSituation(
        "<p>Finalmente le haces caso a tu profesor y disfrutas de una maravillosa comida en el centro de la ciudad.\
		Al pagar la cuenta, miras el reloj y te das cuenta de que llegas tarde al espectáculo, por lo que tienes que decidir si <a href='bordear'> bordear Jaén.</a> o cruzar <a href='cruzar'> la ciudad.</a>\
		 </p>",
		 {
            heading: "la sabiduría de tu profesor",
            diplayOrder: 1,
            tags: ["topic"]
        }
),
"pareja": new undum.SimpleSituation(
        "<p> Piensas que la felicidad de tu pareja es lo primero, y no escatimas en gastos, el plan sale perfecto y disfrutais de una maravillosa tarde.\
		Una vez terminado el espectáculo, llevas a cabo el verdadero plan, antes de llegar al coche, hincas rodilla y te declaras ante ella. No obstante, el final no es tan bonito como esperabas. Hundido por lo profunda pena del acontecimiento, sacas el móvil y ves que Alonso finalmente ganó el mundial, por lo que levantas la cabeza y ves que no ha sido un dia tan malo. \
		<div align='center'><img src='./media/img/fin.jpg'></div></p>",
		 {
            heading: "le felicidad de tu pareja",
            diplayOrder: 1,
            tags: ["topic"]
        }
),
"cruzar": new undum.SimpleSituation(
        "<p>Cruzas la ciudad a toda velocidad y llegas al Castillo, sin embargo, tras media hora de espectáculo, empiezas a aburrirte y te pones la fórmula 1 en el móvil, tu pareja se enfada y se va, es entonces cuando has de tomar la decisión más importante, ¿Cómo vas a bajar a casa?. \
		 </p>\
<img class='img-situation' src='./media/img/plan.jpg'>",
		 {
            heading: "final complicado",
            diplayOrder: 1,
            tags: ["topic"]
        }
),
"bordear": new undum.SimpleSituation(
        "<img class='img-situation' src='./media/img/olivo.jpg'>\
		<p>Mientras bordeas la ciudad ves al increible y nuevo pabellón Olivo Arena,\
		coincidencias del destino, es la final de copa y juega tu Jaén Paraíso Interior, miras a tu pareja, ella, viendo la mirada de un niño ilusionado,\
		te pregunta si prefieres ir, es entonces cuando comprendes que es la mujer de tu vida. FIN\
		 </p>",
		 {
            heading: "propuesta inesperada",
            diplayOrder: 1,
            tags: ["topic"]
        }
)   
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";
