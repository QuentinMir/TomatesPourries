import { Injectable } from '@angular/core';
import { Comm } from 'src/app/models/Comm';
import { Serie } from '../../models/Serie';

@Injectable({
  providedIn: 'root',
})
export class SerieService {
  series: Serie[];

  options: {};
  locales: string;

  constructor() {
    // parameters for the toLocaleDateString method used in the views
    this.locales = 'fr-FR';
    this.options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    /* ######### I suggest you collapse the code at : this.serie = ....  ######### */
    //Creating the series in the service
    this.series = [
      new Serie(
        1,
        'Le coeur a ses Raisons',
        new Date('02-03-2005'),
        3,
        "Doug Montgomery, un magnat des produits de beauté, est retrouvé mort dans son luxueux manoir de Saint-Andrews. Son fils favori Brett, qui avait renoncé à diriger l'entreprise familiale pour pratiquer la médecine, est alors opposé à son frère jumeau, Brad, qui veut, quant à lui, reprendre le contrôle de la société. Lors d'un souper au restaurant, la fiancée de Brett, Criquette Rockwell, est victime d'une tentative de meurtre, une balle de revolver venant se loger dans sa généreuse poitrine. Surgissent alors Ashley, sa sœur jumelle jusqu'ici inconnue de tous, et Peter Malboro, un policier rebelle aux méthodes peu orthodoxes. C'est en usurpant l'identité de sa sœur jumelle lors des funérailles de Doug, qu'Ashley tentera, sans grand succès, de découvrir l'identité de l'assaillant de Criquette.",
        "Une parodie qui n'en est pas vraiment une, pour au moins deux raisons. La première c'est que les intrigues autour de de Brett et Criquette sont presque plus crédibles que celles des soap les plus connus, du jumeau maléfique à l'enlèvement de Doug-Doug que des classiques du genre. Et l'une des réussites de Marc Brunet c'est de justement dépasser le sketch et la parodie pour créer un univers dingue et propre à la série, devenant elle même source de moments cultes et de références. La deuxième tient dans le fait qu'étonnamment la série supporte très facilement les multiples visionnages, passés l'effet fraîcheur de découverte. Le talent des acteurs y est pour beaucoup : tous plus drôles les uns que les autres même si les compositions multiples de Marc Brunet et Anne Dorval forcent un peu plus le respect. Mention aux personnages secondaires savoureux, Crystale Bouvier-Montgomery et Britany Jenkins en tête.",
        'https://media.senscritique.com/media/000006491622/source_big/Le_coeur_a_ses_raisons.jpg',
        [
          new Comm(
            0,
            new Date('03-24-2012'),
            'Jean-Mi',
            'A changé ma vie a tout jamais'
          ),
          new Comm(
            1,
            new Date('02-01-2014'),
            'Jean-Phi',
            "Cette série m'a donné l'accent Québequois, ma femme m'a quitté. Je recommande !"
          ),
        ]
      ),

      new Serie(
        2,
        'The office US',
        new Date('03-24-2005'),
        9,
        "Le quotidien d'un groupe d'employés de bureau dans une fabrique de papier en Pennsylvanie. Michael, le responsable régional, pense être le mec le plus drôle du bureau. Il ne se doute pas que ses employés le tolèrent uniquement parce que c'est lui qui signe les chèques. S'efforçant de paraître cool et apprécié de tous, Michael est en fait perçu comme étant pathétique...",
        "Voilà une série fascinante et intelligente ! Dans la dernière saison Kevin s'exclame : 'C'est un documentaire ? Ohhh. J'ai toujours cru que nous étions dans une sorte de zoo humain.' Il a parfois quelques éclairs de génie ce Kevin... Dunder Mifflin, l'entreprise de The Office, est certes trop comique pour être vraie (ou bien ?) mais ce qu'il s'y passe parodie si bien nos vies professionnelles à nous. Tout est passé au crible et tourné en dérision, des relations amoureuses aux ambitions et jeux politique. Les acteurs sonnent si juste qu'ils semblent être de véritables spécimens d'homo laborans. Et The Office nous donne la chance de les admirer dans leur environnement naturel ! La saison finale rattrape toutes les longueurs des quelques saisons précédentes et sort les spécimens de leur cage d'une manière absolument magistrale.",
        'https://fr.web.img6.acsta.net/r_1920_1080/pictures/20/08/16/19/13/1095407.jpg',
        [
          new Comm(
            0,
            new Date('07-18-2015'),
            'Jean-Pat',
            "J'ai tellement ris que j'ai été victime d'un pneumotorax fulgurant."
          ),
        ]
      ),

      new Serie(
        3,
        'Black Mirror',
        new Date('12-04-2011'),
        5,
        'Chaque épisode de cette anthologie montre la dépendance des hommes vis-à-vis de tout ce qui a un écran...',
        "Charlie Brooker, Journaliste pour The Guardian, réalisateur et scénariste anglais, à qui l'on doit déjà l'excellente mini-série Dead Set, qui sous fond d'apocalypse zombie dénonçait avec ironie les émissions de télé-réalité, en parodiant notamment Big Brother. L'homme, qui a en outre critiqué habilement grâce à sa satire caractéristique le monde de la télévision à travers sa série documentaire How TV Ruined Your Life, signe avec Black Mirror son oeuvre la plus aboutie.",
        'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfANy4BpuLJcrQayEg7YiBJnpLXB9_9rffulLvf4JJzTSyWomTTJPpJJO18bp9hTRetiP2AsPjOsO6L-H-fgYBgbCIe6.jpg?r=44d',
        [
          new Comm(
            0,
            new Date('09-04-2018'),
            'Jean-Luc',
            'sa fé réflichire, on vi dan 1 sossiété'
          ),
        ]
      ),

      new Serie(
        4,
        'Futurama',
        new Date('03-28-1999'),
        7,
        "Accidentellement cryogénisé le 31 décembre 1999 alors qu'il livrait une pizza, Fry se réveille 1000 plus tard à New York. A l'aube de l'an 3000, le monde a bien changé, peuplé de robots et d'extrarrestres. Le jeune homme retrouve l'un de ses descendants qui l'engage lui et ses nouveaux amis, Leela et Bender, au Planet Express, une entreprise de livraison. Ensemble, ils vont devoir faire face à de périlleuses et délirantes missions dans un monde des plus surprenants.",
        "Une série d’animation de Matt Groening, créateur des 'Simpson', drôle, fraîche, amusante, portée par un humour absurde. L’univers présenté ici est un futur burlesque et décalé, bourrée de bonnes idées et d’ingéniosités. Les différents scénarios sont toujours très imaginatifs laissant place à un rythme remarquable et à des histoires réjouissantes. Les personnages principaux sont truculents et l’on prend, à chaque fois, un grand plaisir à retrouver Fry, Bender, Leela, et toute la bande. Une remarquable série, corrosive et hilarante !",
        'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/53EF204992781C9139B2756944A441A9ACA3469F7E4E278EB4BE63A0B9A582CB/scale?width=1200&aspectRatio=1.78&format=jpeg',
        [
          new Comm(
            0,
            new Date('18 jul 2015 00:00:00 GMT'),
            'Jean-Marc',
            "L'an 3000 a vraiment l'air d'être des grandes barres de rire."
          ),
        ]
      ),

      new Serie(
        5,
        'The Boys',
        new Date('07-26-2019'),
        2,
        "Dans un monde fictif où les super-héros se sont laissés corrompre par la célébrité et la gloire et ont peu à peu révélé la part sombre de leur personnalité, une équipe de justiciers qui se fait appeler 'The Boys' décide de passer à l'action et d'abattre ces super-héros autrefois appréciés de tous.",
        'Que demander de plus à une série que d’avoir envie de regarder le prochain épisode ? C’est quand même simple a noter !The Boys est dans cette caste. Une grande série : non. Une série innovante : oui. Démonter du super héros quelle bonne idée. Un monde où un super héros est au final un produit, un salarié, qui pense à se rebeller. Une satire sociale ou les gentils et les méchants se ressemblent au final.    J’avais un peu peur que cela s’essoufle au fil des épisodes mais les personnages prennent de plus en plus de volume et c’est très bien ainsi. Team homelander ou team Butcher au final on peut presque ce le demander ?',
        'https://fr.web.img6.acsta.net/r_1920_1080/pictures/20/08/27/10/45/4546399.jpg',
        [
          new Comm(
            0,
            new Date('05-07-2020'),
            'Jean-Paul',
            'Entre nous, si nous avions des pouvoirs, nous en servirions nous pour faire le bien ?'
          ),
        ]
      ),

      new Serie(
        6,
        'Malcolm',
        new Date('01-09-2000'),
        7,
        "Petit génie malgré lui, Malcolm vit dans une famille hors du commun. Le jeune surdoué n'hésite pas à se servir de son intelligence pour faire les 400 coups avec ses frères. Et les parents tentent tant bien que mal de canaliser l'énergie de ces petits démons.",
        "Série des ans 2000, Malcolm est probablement l'une des série les plus drôle et inventive de ses vingt dernières années, derrière la vie de famille complétement déjanté se cache des personnages attachants qui arrivent à la fois à être drôle et naturel, malgré les épreuves de la vie, jamais cette série ne tombe dans le dramatique, au contraire elle en tire toujours quelque chose de drôle.   Cette série m'a fait passer les meilleurs moments de ma vie et encore aujourd'hui hui je ne me lasse pas de revoir malcolm et sa famille.",
        'https://images.bfmtv.com/5gVGV-aK1RsQgPDz9FFprctLnXU=/0x0:1200x675/640x0/images/La-serie-Malcolm-370653.jpg',
        [
          new Comm(
            0,
            new Date('09-01-2010'),
            'Jean-Bernard',
            'La série de mon enfance ❤️❤️❤️'
          ),
        ]
      ),

      new Serie(
        7,
        'Stranger Things',
        new Date('07-15-2016'),
        3,
        "A Hawkins, en 1983 dans l'Indiana. Lorsque Will Byers disparaît de son domicile, ses amis se lancent dans une recherche semée d’embûches pour le retrouver. Dans leur quête de réponses, les garçons rencontrent une étrange jeune fille en fuite. Les garçons se lient d'amitié avec la demoiselle tatouée du chiffre '11' sur son poignet et au crâne rasé et découvrent petit à petit les détails sur son inquiétante situation. Elle est peut-être la clé de tous les mystères qui se cachent dans cette petite ville en apparence tranquille…",
        "3 saisons réussies, soutenues principalement par ses acteurs et les dialogues (pour certains). L'histoire sans fin au final n'est que le fil rouge. Dommage que beaucoup de situations et d'attitudes décalées ponctuent trop l'ensemble. 3.5/5 !!!",
        'https://m.media-amazon.com/images/I/71GHrIVU93L._AC_SL1001_.jpg',
        [new Comm(0, new Date('11-26-2019'), 'Jean-Bapt', 'Pitié monsieur')]
      ),
    ];
  }

  // method used to get the serie associated to a collected id and returns it
  getSerieById(serieId: number): Promise<Serie> {
    return new Promise<Serie>((res, rej) => {
      for (let serie of this.series) {
        if (serie.id === serieId) {
          res(serie);
          break;
        }
      }
    });
  }

  // method used to add a serie after form submition
  addSerie(serieToAdd: Serie): Promise<void> {
    return new Promise<void>((res, rej) => {
      // if series array is empty, then the added serie's id is 1
      if (this.series.length === 0) {
        serieToAdd.id = 1;
      } else {
        //get the length of the array and add 1. make this value the id of the new serie
        serieToAdd.id = this.series[this.series.length - 1].id + 1;
      }
      // add new serie to the series array
      this.series.push(serieToAdd);

      res();
    });
  }

  // method used to add a comment to a particular serie after form submition
  addComment(commentToAdd: Comm, index: number): Promise<void> {
    return new Promise<void>((res, rej) => {
      // if the comment array is empty (happens after creating a new serie), the new id is 0
      if (this.series[index].comments.length === 0) {
        commentToAdd.id = 0;
      }
      //get the length of the array and add 1. Make this value the id of the new comment
      else {
        commentToAdd.id =
          this.series[index].comments[this.series[index].comments.length - 1]
            .id + 1;
      }
      // add comment to the comment array
      this.series[index].comments.push(commentToAdd);
      res();
    });
  }

  // method to edit an existing serie
  editSerie(serieToEdit: Serie): Promise<void> {
    return new Promise<void>((res, rej) => {
      for (let [index, serie] of this.series.entries()) {
        // comparing ids
        if (serie.id === serieToEdit.id) {
          //Override edited serie after comparing IDs
          this.series[index] = serieToEdit;
          res();
          break;
        }
      }
    });
  }

  // method to delete an existing serie based on it's id value
  deleteSerie(serieIdToDelete: number): Promise<void> {
    return new Promise<void>((res, rej) => {
      for (let [index, serie] of this.series.entries()) {
        // comparing ids
        if (serie.id === serieIdToDelete) {
          // removing correponding serie from series array
          this.series.splice(index, 1);
          res();
          break;
        }
      }
    });
  }
}
