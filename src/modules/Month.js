import Moment from 'moment'
import { extendMoment } from 'moment-range'

const moment = extendMoment(Moment)

export default class Month {
  constructor (month, year) {
    this.month = parseInt(month) - 1
    this.year = parseInt(year)
    this.start = moment([this.year, this.month])
    this.end = this.start.clone().endOf('month')

    console.log(this.start.toString())
    console.log(this.end.toString())
  }

  getWeekStart () {
    return this.start.weekday()
  }

  /**
   * Returns days range
   * @doc https://github.com/rotaready/moment-range#by
   * @returns {moment[] | any[]}
   */
  getDays () {
    return Array.from(moment.range(this.start, this.end).by('day'))
  }
}
