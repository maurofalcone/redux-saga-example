import News from './view'
import { connect } from 'react-redux'
import { getNews } from '../../actions/news'

const mapStateToProps = state => ({
    news: state.news.news,
    loading: state.news.loading,
    error: state.news.error
})
const mapDistapatchToProps = dispatch => ({
    getNews: () => { dispatch(getNews()) }
})

export default connect(mapStateToProps, mapDistapatchToProps)(News)
