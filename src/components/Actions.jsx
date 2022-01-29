function Actions ({ actions }) {
    return (
        <div className="actions">
          {/* Font Awesome icons */}
          <i class="far fa-comment">{actions}</i>
          <i class="fas fa-retweet">{actions}</i>
          <i class="far fa-heart">{actions}</i>
          <i class="fas fa-share">{actions}</i>
        </div>   
    )
}
export default Actions;