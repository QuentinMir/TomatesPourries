import { Comm } from './Comm';

export class Serie {
  private _id: number;
  private _name: string;
  private _releaseDate: Date;
  private _numberOfSeasons: number;
  private _description: string;
  private _review: string;
  private _photo: string;
  private _comments: Array<Comm>;

  constructor(
    id: number,
    name: string,
    releaseDate: Date | string,
    numberOfSeasons: number,
    description: string,
    review: string,
    photo: string,
    comments: Array<Comm>
  ) {
    this._id = id;
    this._name = name;
    this._releaseDate =
      typeof releaseDate === 'string' ? new Date(releaseDate) : releaseDate;
    this._numberOfSeasons = numberOfSeasons;
    this._description = description;
    this._review = review;
    this._photo = photo;
    this._comments = comments;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter releaseDate
   * @return {Date}
   */
  public get releaseDate(): Date {
    return this._releaseDate;
  }

  /**
   * Getter numberOfSeasons
   * @return {number}
   */
  public get numberOfSeasons(): number {
    return this._numberOfSeasons;
  }

  /**
   * Getter description
   * @return {string}
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Getter review
   * @return {string}
   */
  public get review(): string {
    return this._review;
  }

  /**
   * Getter photo
   * @return {string}
   */
  public get photo(): string {
    return this._photo;
  }

  /**
   * Getter comments
   * @return {Array<Comm>}
   */
  public get comments(): Array<Comm> {
    return this._comments;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter releaseDate
   * @param {Date} value
   */
  public set releaseDate(value: Date) {
    this._releaseDate = value;
  }

  /**
   * Setter numberOfSeasons
   * @param {number} value
   */
  public set numberOfSeasons(value: number) {
    this._numberOfSeasons = value;
  }

  /**
   * Setter description
   * @param {string} value
   */
  public set description(value: string) {
    this._description = value;
  }

  /**
   * Setter review
   * @param {string} value
   */
  public set review(value: string) {
    this._review = value;
  }

  /**
   * Setter photo
   * @param {string} value
   */
  public set photo(value: string) {
    this._photo = value;
  }

  /**
   * Setter comments
   * @param {Array<Comm>} value
   */
  public set comments(value: Array<Comm>) {
    this._comments = value;
  }
}
