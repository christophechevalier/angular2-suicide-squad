import {InMemoryDbService} from 'angular2-in-memory-web-api';
import {Hero} from './hero';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes:Hero [] = [
      {
        id: 1,
        name: 'Harley Quinn',
        imgHero: 'HarleyQuinn.jpg',
        superpowers: 'Master gymnast ' + ',' + ' Toxic immunity ' + ',' + ' Trained psychiatrist',
        weapons: 'Clown-themed gadgets'
      },
      {
        id: 2,
        name: 'Joker',
        imgHero: 'Joker.jpeg',
        superpowers: 'High intelligence ' + ',' + ' Skilled chemist ' + ',' + ' Experience in hand to hand combat',
        weapons: 'Access to a variety of gadgets'
      },
      {
        id: 3,
        name: 'Batman',
        imgHero: 'Batman.jpeg',
        aliasHero: 'Bruce Wayne',
        superpowers: 'Genius-level intelligence' + ',' + ' Master detective' + ',' + ' Master escapologist' + ',' +
        ' Peak human physical condition' + ',' + ' Master martial artist',
        weapons: 'Access to high tech equipment'
      },
      {
        id: 4,
        name: 'Enchantress',
        imgHero: 'Enchantress.jpeg',
        aliasHero: 'June Moone',
        superpowers: 'Vast magical powers' + ',' + ' Affect inanimate objects with magic' + ',' +
        ' Energy projection' + ',' + ' Energy manipulation' + ',' + ' Illusion and spell casting' + ',' +
        ' Teleportation' + ',' + ' Intangibility' + ',' + ' Healing' + ',' + ' Flight',
        weapons: 'No weapons'
      },
      {
        id: 5,
        name: 'Deadshot',
        imgHero: 'Deadshot.jpeg',
        aliasHero: 'Floyd Lawton',
        superpowers: 'Expert Marksmen' + ',' + ' Superhuman hand-eye coordination',
        weapons: 'Sniper Rifle'
      },
      {id: 6, name: 'Katana', imgHero: 'Katana.jpeg', superpowers: ''},
      {id: 7, name: 'Killer Croc', imgHero: 'KillerCroc.jpeg', superpowers: ''},
      {id: 8, name: 'Flash', imgHero: 'Flash.jpeg', aliasHero: 'Barry Allen', superpowers: ''},
      {id: 9, name: 'Amanda Waller', imgHero: 'AmandaWaller.jpeg', superpowers: ''},
      {id: 10, name: 'Captain Boomerang', imgHero: 'CaptainBoomerang.jpeg', superpowers: ''}
    ];
    return {heroes};
  }
}