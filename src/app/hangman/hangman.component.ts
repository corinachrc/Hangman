import { Component } from '@angular/core';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent {

  wordsList: string[] = ["cuvant", "propozitie", "acasa","librarie","oboseala","galagie"]
  randomWord: string = this.wordsList[Math.floor(Math.random() * this.wordsList.length)]

  letters = this.randomWord.split("");
  guess = '';

  wrongLetters: string[] = [];
  maxim: number = 5;
  guessedLetters: string[] = []

  won: string = "";
  count: number = 0;

  ngOnInit(): void {
    let wordLength = this.letters.length;
    for (let i = 0; i < wordLength; i++) {
      this.guessedLetters[i] = " "
    }
  }
  checkLetter() {
    if (this.letters.includes(this.guess)) {
      for (let i = 0; i < this.letters.length; i++) {
        if (this.letters[i] == this.guess) {
          this.guessedLetters[i] = this.guess
          this.count++
        }

      }

      if (this.count == this.letters.length) {
        this.won = "Ai castigat";
      }
      this.guess = '';
    } else {
      this.wrongLetters.push(this.guess)

      if (this.wrongLetters.length == this.maxim) {


        this.won = "Ai pierdut";
      }
      this.guess = ''
    }



  }

}

