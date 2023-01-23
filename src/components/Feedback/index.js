import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {feedback: false}

  onClickFeedback = () => {
    this.setState({feedback: true})
  }

  emojiForm = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            How satisfied are you with our Customer Support Performance
          </h1>
          <ul className="emoji-list">
            {emojis.map(eachEmoji => (
              <li key={eachEmoji.id} className="list-container">
                <button
                  className="emoji-button"
                  onClick={this.onClickFeedback}
                  type="button"
                >
                  <img
                    className="emoji-img"
                    src={eachEmoji.imageUrl}
                    alt={eachEmoji.name}
                  />
                </button>
                <p className="name">{emojis.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  feedbackResponseForm = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="app-container">
        <div className="feedback-container">
          <img alt="love emoji" src={loveEmojiUrl} className="love-emoji" />
          <h1 className="head">Thank You</h1>
          <p className="par">
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      </div>
    )
  }

  render() {
    const {feedback} = this.state

    return (
      <div className="app-container">
        <div className="feedback-question-container">
          {feedback ? this.feedbackResponseForm() : this.emojiForm()}
        </div>
      </div>
    )
  }
}

export default Feedback
