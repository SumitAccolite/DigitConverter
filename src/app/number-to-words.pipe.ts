import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToWords',
})
export class NumberToWordsPipe implements PipeTransform {
  private oneToNineteen: string[] = [
    '',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
    'Eleven',
    'Twelve',
    'Thirteen',
    'Fourteen',
    'Fifteen',
    'Sixteen',
    'Seventeen',
    'Eighteen',
    'Nineteen',
  ];
  private multiplesOfTen: string[] = [
    '',
    '',
    'Twenty',
    'Thirty',
    'Forty',
    'Fifty',
    'Sixty',
    'Seventy',
    'Eighty',
    'Ninety',
  ];

  private convertToWords(num: number): string {
    if (num < 20) {
      return this.oneToNineteen[num];
    } else {
      return (
        this.multiplesOfTen[Math.floor(num / 10)] +
        (num % 10 !== 0 ? ' ' + this.oneToNineteen[num % 10] : '')
      );
    }
  }

  transform(value: number): string {
    if (value < 1 || value > 1000000) {
      return 'Please enter a valid number between 1 and 1000000.';
    }

    const convertToWords = (num: number): string => {
      if (num < 20) {
        return this.oneToNineteen[num];
      } else {
        return (
          this.multiplesOfTen[Math.floor(num / 10)] +
          ' ' +
          this.oneToNineteen[num % 10]
        );
      }
    };

    let result = '';

    if (value >= 100000) {
      const lakhs = Math.floor(value / 100000);
      if (lakhs > 0) {
        result += convertToWords(lakhs) + ' Lakh ';
      }
      value %= 100000;
    }

    if (value >= 1000) {
      const thousands = Math.floor(value / 1000);
      if (thousands > 0) {
        result += convertToWords(thousands) + ' Thousand ';
      }
      value %= 1000;
    }

    if (value >= 100) {
      result += convertToWords(Math.floor(value / 100)) + ' Hundred ';
      value %= 100;
    }

    if (value > 0) {
      result += convertToWords(value);
    }

    return result.trim();
  }
}
