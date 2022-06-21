
//English
const english = {
    navbar: {
        home: "home",
        tools: "Tools",
        about: "about",
        faq: "FAQ",
        languages: "Languages",
        spanish: "Español",
        english: "English"
    },
    home: {
        welcome: "Welcome to Elrios Lab!",
        description: "Designed to help users calculate and resolve specific issues easily.",
        'stat-calculator': "Stats Calculator"
    },
    about: {
        about: "About",
        p1: "Web App made for reasons of helping people to solve or facilitate certain problems in the game, I also developed the applications for reasons of personal practice and because I like to programming: D.",
        p2: "I am a content creator on YouTube. I upload Elsword Guides and Streams commenting instructive content about the game. The official language of the channel is in Spanish, so we will answer many things that we discuss more easily in that language.",
        channel: "Youtube Channel",
        creator: "Creator",
        'logo-design': "Logo Design",
        reference: "Inspired by",
        gratitude: "Thankfulness to",
        guildmate: "My Guildmates",
        credits: "Credits"

    },
    faq: {
        title: "Frequent Answer Question",
        'stat-calculator': {
            q1: {
                "question": "1. What is normalizing?",
                "answer": "When you increase your stats, there comes a point where those stats you add reduce their effectiveness dramatically. Each of the stats (except hp and awakening time) has a normalization point, which is nothing more than the restriction that applies as you add current value to your stats, each stat has its own normalization table."
            },
            q2: {
                question: "2. How much Critical, Maximize and Action Speed you need it?",
                answer: {
                    p1: "The recommended value may vary depending on the class you take, but starting from the ideal value (without character's passives/buffs) should be: ",
                    p2: {
                        note: "NOTE: ",
                        text: "Action Speed recommended depends the class and how much works their castings."
                    }
                }
            },
            q3: {
                question: "3. How works your sockets,buffs and passives in your stats?",
                answer: {
                    p1: "There are many ways to apply stats, each effect, whether buff or passive, is not displayed visually at your current stat. These stats can come in 3 different ways: ",
                    p2: {
                        title: "Normalized: ",
                        text: "Apply current normalizing rules, you can assume as a socket when you set in your gear, is the most common source in almost all the buffs and/or passives."
                    },
                    p3: {
                        title: "Unnormalized: ",
                        text: "Stat that plus with your current normalized stat, ignore the normalizing rules and action speed case can ignore the cap. Is visible in certains permanent stats passives."
                    },
                    p4: {
                        title: "Multiplicative: ",
                        text: "Stat that Amplify your current value in percentage (after operate unnormalized stat), ignore the normalizing rules and action speed case can ignore the cap. Visible in Rigo/Elrianode buffs or specifics character passives"
                    }
                }
            },
            q4: {
                question: "4. How Calculate Multiplicative Stat to my current Stat?",
                answer: {
                    p1: "With our calculator is too easy to make calculations, trough this formula we determine the final value including rigo's Buff or any effect that you want check it:",
                    p2: {
                        fv: "final_value",
                        cv: "current_value",
                        mv: "multiplicative_stat"
                    }
                }
            }
        },
        reforge: {
            q1: {
                question: "Which Rigo's Set Should I choose?",
                p1: "If you want to opt for something that gives you the greatest possible damage, you must choose crimson set, but it should be noted that the sage provides a bit more damage with the difference that it is better crimson for partys if you go to full DPS",
                p2: "The Sage set works for you either to support or to Raid by Berthe if you want to wear less polarize and resist more.",
                p3: "It is not a set that offers that much damage but it is a very interesting option for classes that for a large part of their abilities are decent to use and few cooldown acceleration problems such as Shakti, Devi or Comet Crusader",
                p4: "It is weaker than the crimson and its point of impact comes a little later than the rest of the sets, if it is for Berthe Raid it is not bad to wear it but for the rest of the situations crimson or cerulean is better.",
                p5: "I do not recommend it, it is a set that works in very few classes and the effect is not close to that of crimson, personally I would not recommend it.",
                p6: "Pvp set, not very profitable for PvE."
            }
        },
        adaptation: {
            q1: {
                title: "What's adaptation?",
                p1: "The adaptation helps us to mitigate part of the Demon Realm's debuff, this is important because we recover attack and HP considerably."
            },
            q2: {
                title: "How to calculate the efficiency of our adaptation?",
                p1: "Depending on the degree of debuff, the adaptation becomes more and more important, for that reason we can calculate the total multiplier that the adaptation would give us based on the fact that the current attack without occupying adaptation part of 100%, we apply this calculation: ",
                p2: "For each point of adaptation we recover 1% of attack and HP, the following table shows us the maximum gain that we could get from stats assuming that we can exceed the cap.",
                debuff: "Enviromental Debuff",
                multiplier: "Multiplier"
            }
        },
        'ignore-defense': {
            q1: {
                title: "How does Defense Work?",
                answer: {
                    "p1": "Defense reduce received damage, to limit the percent the game use a convertion to when we got more defense the percent is more normalize so is more complicated increase it. This is important because numeric/base defense is not the same thing that defense percent.",
                    "p2": "To Convert from numeric defense to percent we use this formula:",
                    "p3": "To Convert from percent to Numeric:",
                    "p4": "Where:",
                    "def-const": "Constant value to do the convertion, this vary depending the target lv(elrianoce above always the enemy is lv 99)",
                    "def-base": "Defense in Numeric value.",
                    "def-percent": "Defense in percentage value or damage reduced."
                }
            },
            q2: {
                title: "How much does Defense Ignore increase damage?",
                answer: {
                    p1: "Damage increase vary depending the ignore defense and enemy's numeric defense. Ignore Defense reduce the numeric/base defense, not the percent. To calculate the remain defense we use this formula:",
                    p2: "To calculate gained damage:"
                }
            }
        }
    },
    'stat-calculator': {
        title: "Stats Calcutator",
        'tooltip-total': "Unnormalized percentage",
        'tooltip-actual': "Normalized percentage",
        efficiency: "Efficiency",
        mstat: "Multiplicative Effect",
        'tooltip-mstat': "Extra percentage for current stat Ex. Rigo/elrianode set buff"
    },
    adaptation: {
        title: "Adaptation",
        debuff: "Enviromental Debuff",
        adaptation: "adaptation",
        'stat-gained': "Current Stat Gained"
    },
    reforge: {
        reforge: "Reforge",
        armor: "Armor",
        from: "From",
        to: "To",
        attempts: "Attemps",
        'current-percentage': "Current Percentage",
        "durability": "Durability",
        note: "*Max Number of Chlorite seeds asuming the piece with 100% durability."
    },
    'ignore-defense': {
        'defense-base': "Defense Base",
        'defense-percentage': "Def %",
        'current-ignore': "Current Ignore Defense",
        'remain-defense': "Remain Defense",
        'damage-gained': "Damage Gained"
    }
}

//Spanish
const spanish = {
    "navbar": {
        "home": "Inicio",
        "tools": "Herramientas",
        "about": "Acerca",
        "faq": "FAQ",
        "languages": "Idiomas",
        "spanish": "Español",
        "english": "English"
    },
    "home": {
        "welcome": "Bienvenidos a Elrios Lab!",
        "description": "Diseñado para ayudar a los usuarios a calcular y resolver ciertos problemas específicos fácilmente.",
        "stat-calculator": "Calculadora de Stats"
    },
    "about": {
        "about": "Acerca",
        "p1": "App Web hecha por motivos de ayudar a la gente a resolver o facilitar determinados problemas en el juego, también desarrollé las aplicaciones por motivos de práctica personal y porque me gusta programar :D.",
        "p2": "Soy creador de contenido en Youtube. Subo Guías de Elsword y directos comentando contenido didactico e instructivo sobre el juego, El idioma oficial del canal es en español así que muchas cosas que discutimos la responderemos mas facil en dicho idioma.",
        "channel": "Canal de Youtube",
        "creator": "Creado Por",
        "logo-design": "Diseño del Logo",
        "reference": "Inspirado por ",
        "gratitude": "Agradecimientos para",
        "guildmate": "Miembros de la guild",
        "credits": "Créditos"
    },
    "stat-calculator": {
        "title": "Calculadora de Stats",
        "tooltip-total": "Porcentaje sin normalizar",
        "tooltip-actual": "porcentaje normalizado",
        "efficiency": "Eficiencia",
        "mstat": "Efecto Multiplicativo ",
        "tooltip-mstat": "Porcentaje extra para el stat actual Ej: Rigo/elrianode set's buff "
    },
    "adaptation": {
        "title": "Adaptacion",
        "debuff": "Debuff de Entorno",
        "adaptation": "Adaptación",
        "stat-gained": "Ganancia total"
    },
    "reforge": {
        reforge: "Forja",
        armor: "Armadura",
        "from": "Desde",
        "to": "Hasta",
        "attempts": "Numero de Intentos",
        "current-percentage": "Porcentaje Actual",
        "durability": "Durabilidad",
        "note": "*El Número máximo de usos de Chlorite seeds es asumiendo que la pieza tiene 100% de durability."
    },
    "ignore-defense": {
        "defense-base": "Defensa Base",
        "defense-percentage": "Defensa %",
        "current-ignore": "Ignorar Defensa Actual",
        "remain-defense": "Defensa Restante",
        "damage-gained": "Daño ganado"
    },
    "faq": {
        "title": "Preguntas Frecuentes",
        "stat-calculator": {
            q1: {
                "question": "1. QUÉ ES LA NORMALIZACIÓN?",
                "answer": "conforme uno va aumentando sus stats llega un punto en que esos stats que añadas reducen su eficacia dramaticamente. Cada uno de los stats (exceptuando hp y awakening time) tiene un punto de normalizacion, que no es mas que la restriccion que aplica conforme vas agregando valor actual en tus stats, cada stat tiene su propia tabla de normalización."
            },
            "q2": {
                "question": "2. Cuánto necesito de maximize, critico y action speed?",
                "answer": {
                    "p1": "el valor recomendado puede variar dependiendo de la clase que lleves, pero partiendo de el valor ideal (sin contar con las pasivas/buffs de personajes) serian:",
                    "p2": {
                        "note": "NOTA: ",
                        "text": "el action speed ideal puede depender de la clase y que tan bien interactue con sus casteos."
                    }
                }
            },
            "q3": {
                "question": "3. Cómo se aplican los sockets, buffs y pasivas en los stats?",
                "answer": {
                    "p1": "Hay muchas formas de aplicar los stats, cada efecto ya sea buff o pasivas no se presentan visualmente en tu stat actual. Dichos stats pueden llegar de 3 maneras distintas: ",
                    "p2": {
                        "title": "Normalizado: ",
                        "text": "cumple con las reglas de la normalizacion, se puede asumir como un socket que aplicas en tu gear, es la fuente mas comun en casi todos los buff y/o pasivas."
                    },
                    "p3": {
                        "title": "No se normaliza: ",
                        "text": "es un stat que se suma con el valor del stat normalizado, este valor ignora las reglas de normalizacion y para el caso del action speed puede tambien ignorar el cap. Se ven en algunas pasivas de stat permanente."
                    },
                    "p4": {
                        "title": "Multiplicativo: ",
                        "text": "es un stat que amplifica el valor del stat actual en porcentaje y luego de operarse el stat sin normalizar, este valor ignora las reglas de normalizacion y para el caso del action speed puede tambien ignorar el cap. Suele verse este efecto en el set de rigomor y de elrianode en los buffs."
                    }
                }
            },
            "q4": {
                "question": "4. COMO SE CALCULA EL STAT MULTIPLICATIVO CON MI STAT ACTUAL?",
                "answer": {
                    "p1": "Con nuestra calculadora es muy facil de hacer los calculos. A través de esta formula podemos determinar el valor final con todo y buff de rigomor o de algun otro efecto que quieras probar:",
                    "p2": {
                        "fv": "valor_final",
                        "cv": "valor_actual",
                        "mv": "stat_multiplicativo"
                    }
                }
            }
        },
        "reforge": {
            "q1": {
                "question": "CUÁL SET DE RIGOMOR DEBERÍA DE ESCOGER?",
                "p1": "Si quieres optar por algo que te de el mayor daño posible puedes elegir si o si el set de crimson, pero cabe destacar que el sage brinda algo mas de daño con la diferencia de que es mejor crimson para partys si vas de daño a full",
                "p2": "El set Sage te sirve o para supportear o para Raid de Berthe si deseas llevar menos polarize y resistir más.",
                "p3": "No es un set que brinda tanto daño pero es una opción muy interesante para clases que en gran parte de sus habilidades son decentes de usar y pocos problemas de cooldown acceleration como podria ser Shakti, Devi o Comet Crusader",
                "p4": "Es mas debil que el crimson y su punto de impacto llegan un poco mas tarde que el resto de sets, si es para Berthe Raid no esta mal llevarlo pero para el resto de situaciones crimson cerulean es mejor.",
                "p5": "No lo recomiendo, es un set que funciona en muy pocas clases y el efecto no se acerca al que brinde el crimson, en lo personal no lo recomendaria.",
                "p6": "Set de pvp, no es muy rentable para PvE."
            }
        },
        "adaptation": {
            "q1": {
                "title": "Qué es la adaptación?",
                "p1": "La adaptación nos sirve para mitigar parte del debuff del Demon Realm, esto es importante ya que recuperamos ataque y HP considerablemente."
            },
            "q2": {
                "title": "Cómo calcular la eficiencia de nuestra adaptacion?",
                "p1": "Dependiendo del grado que haya de debuff la adaptacion se vuelve cada vez mas importante, por esa razón podemos calcular el multiplicador total que nos daria la adaptacion basandonos en que el ataque actual sin ocupar adaptation parte de 100% aplicamos este cálculo: ",
                "p2": "Por cada punto de adaptatión recuperamos 1% de ataque y vida, la siguiente tabla nos muestra la ganancia maxima que podriamos conseguir de stats asumiendo que podemos sobrepasar el cap.",
                "debuff": "Debuff de Entorno",
                "multiplier": "Multiplicador"
            }
        },
        "ignore-defense": {
            "q1": {
                "title": "Cómo funciona la Defensa?",
                "answer": {
                    "p1": "La defensa hace que reduzca el daño que te causen, para limitar el porcentaje de defensa se utiliza una conversion para que conforme vas sacando mas defensa el porcentaje irá costando mas en aumentarlo. Es importante saberlo porque una cosa es la defensa numerica/base y otra cosa es la defensa porcentual.",
                    "p2": "Para convertir de defensa numerica a la defensa porcentual utilizamos esta formula:",
                    "p3": "Para convertir de defensa porcentual a defensa numerica utilizamos esta formulilla:",
                    "p4": "Donde:",
                    "def-const": "Valor constante para la conversion, esto varia de acuerdo al nivel del objetivo (elrianode para arriba son lv 99 siempre)",
                    "def-base": "Defensa en valor numerico.",
                    "def-percent": "Defensa en valor porcentual o Daño que mitiga."
                }
            },
            "q2": {
                "title": "Cuánto Daño ganas con el Ignore Defense?",
                "answer": {
                    "p1": "La ganacia de daño varia dependiendo del ignore defense y la cantidad de defensa base del enemigo. El Ignore Defensa afecta a la defensa base, NO a la porcentual. Para calcular la defensa restante utilizamos esta formula:",
                    "p2": "Para calcular el Daño Ganado:"
                }
            }
        }
    }
}

export {english,spanish}

