import moment from 'moment'

export default class Month {
  constructor (month, year) {
    this.month = parseInt(month)
    this.year = parseInt(year)
    this.start = moment([this.year, this.month])
    this.end = this.start.clone().endOf('month')

    console.log(this.start.toString())
    console.log(this.end.toString())
  }
}
