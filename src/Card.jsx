function CreateCard() {
  return (
    <div className="card-container">
      <img src="../images/image-equilibrium.jpg" alt="equlibrium-img" />
      <div className="card-info">
        <h2>Equilibrium #3429</h2>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div className="value-and-time">
          <div className="value">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="18"
              viewBox="0 0 11 18"
              fill="none"
              className="etherium-logo"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.5 0L10.9961 9.16875L5.5 12.4312L0 9.16875L5.5 0ZM11 10.2165L5.5 18L0 10.2165L5.5 13.479L11 10.2165Z"
                fill="#00FFF8"
              />
            </svg>
            <span className="price">0.041 ETH</span>
          </div>
          <div className="time">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <rect
                opacity="0.01"
                x="16.3049"
                y="16.6739"
                width="16"
                height="16"
                transform="rotate(180 16.3049 16.6739)"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.63818 8.67388C1.63818 4.99199 4.62295 2.00722 8.30485 2.00722C10.073 2.00722 11.7687 2.7096 13.0189 3.95984C14.2691 5.21008 14.9715 6.90577 14.9715 8.67388C14.9715 12.3558 11.9867 15.3406 8.30485 15.3406C4.62295 15.3406 1.63818 12.3558 1.63818 8.67388ZM8.30485 9.34055H10.9715C11.3397 9.34055 11.6382 9.04207 11.6382 8.67388C11.6382 8.30569 11.3397 8.00722 10.9715 8.00722H8.97152V6.00722C8.97152 5.63903 8.67304 5.34055 8.30485 5.34055C7.93666 5.34055 7.63818 5.63903 7.63818 6.00722V8.67388C7.63818 9.04207 7.93666 9.34055 8.30485 9.34055Z"
                fill="#8BACD9"
              />
            </svg>
            <span>3 days left</span>
          </div>
        </div>
        <div className="creator-container">
          <img src="../images/image-avatar.png" alt="creator-img" />
          <div className="creator-name">
            <span class="s">Creation of</span>
            <span>Jules Wyvern</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateCard;
