// CARDS DATA ///////////////////////////////////////////////////////////////////////////////////
const cards = [
  {
    title: "Day Trading Idea and Strategy",
    image:
      "https://lh3.googleusercontent.com/d/1zg4AipTKw0vRPrJJ_JgevXImo8Ax8cK7",
    categoryName: "Business",
    category: 1,
    participants: 1,
    price: "Free",
    distance: 5,
    type: 2,
    date: "Mon, Mar 18 · 7:00 PM PDT",
  },
  {
    title: "Let's Talk Networking: JPMorgan Chase in Palo Alto",
    image:
      "https://lh3.googleusercontent.com/d/1G_UVNqM9uSDsdsau0aqOzMouCBWYjSpK",
    categoryName: "Business",
    category: 1,
    participants: 41,
    price: "Free",
    distance: 25,
    type: 2,
    date: "Tue, Mar 19 · 5:00 PM PDT",
  },
  {
    title:
      "Tech Talks & Quiz: Next-Gen Database Solutions for Emerging Use Cases",
    image: "png/3.png",
    categoryName: "Technology",
    category: 2,
    participants: 40,
    price: "Free",
    distance: 0,
    type: 1,
    date: "Wed, Mar 13 · 6:00 PM PDT",
  },
  {
    title: "INFORMS San Francisco Chapter In-Person Event",
    image:
      "https://lh3.googleusercontent.com/d/1P2lNgSZO85JB4N8ii8GmO7r8Ay6qSsVM",
    categoryName: "Health and Wellbeing",
    category: 4,
    participants: 41,
    price: "Free",
    distance: 50,
    type: 2,
    date: "Thu, Mar 28 · 5:00 PM PDT",
  },
  {
    title: "AI Wednesdays - Meet and Greet!",
    image:
      "https://lh3.googleusercontent.com/d/1w9upOybvAGjCavCkFefHJNn26tGKFoZ8",
    categoryName: "Health and Wellbeing",
    category: 4,
    participants: 29,
    price: "Free",
    distance: 50,
    type: 2,
    date: "Wed, Mar 13 · 6:30 PM PDT",
  },
  {
    title: "ROS By-The-Bay March 2024",
    image: "png/6.png",
    categoryName: "Social Activities",
    category: 3,
    participants: 51,
    price: 0,
    distance: 0,
    type: 1,
    date: "Thu, Mar 21 · 6:00 PM PDT",
  },
  {
    title: "Free Christian Singles' Dinner",
    image: "png/7.png",
    categoryName: "Hobbies and Passions",
    category: 5,
    participants: 11,
    price: "Free",
    distance: 10,
    type: 2,
    date: "Fri, Mar 29 · 6:00 PM PDT",
  },
  {
    title: "In-person: Deep Dive into RAG Architectures (Food served)",
    image:
      "https://lh3.googleusercontent.com/d/1PnTFLfTdfurJCWWW89GTy6SFAwJOpWSc",
    categoryName: "Hobbies and Passions",
    category: 5,
    participants: 16,
    price: "Free",
    distance: 50,
    type: 2,
    date: "Thu, Mar 14 · 5:00 PM PDT",
  },
  {
    title: "Amazing On-Demand 15 Min Interviews with Top Coaches and Speakers",
    image:
      "https://lh3.googleusercontent.com/d/1HXggN9iNNLe82icbIyTdeV11Z1oVO8qO",
    categoryName: "Business",
    category: 1,
    participants: 3,
    price: "Free",
    distance: 25,
    type: 1,
    date: "Thu, Mar 14 · 6:00 PM PDT",
  },
  {
    title: "Vision Pro Developers Online Meetup",
    image:
      "https://lh3.googleusercontent.com/d/1lXZHC5QqaOX7Ym5iaubKL4DfR-xqgtp7",
    categoryName: "Technology",
    category: 2,
    participants: 51,
    price: 0,
    distance: 0,
    type: 1,
    date: "Wed, Mar 13 · 7:00 PM PDT",
  },
  {
    title: "Significant Musical Moments",
    image:
      "https://lh3.googleusercontent.com/d/1L_EtYKWs_8Dm_0CfDI1hQ1KwN81PdbkO",
    categoryName: "Hobbies and Passions",
    category: 5,
    participants: 16,
    price: 0,
    distance: 10,
    type: 1,
    date: "Wed, Mar 13 · 6:00 PM PDT",
  },
  {
    title: "FREE Webinar: Introduction to Power BI",
    image:
      "https://lh3.googleusercontent.com/d/1CGz7GOJeESth-focyP8p_MnlRok8serg",
    categoryName: "Technology",
    category: 2,
    participants: 33,
    price: 0,
    distance: 0,
    type: 1,
    date: "Thu, Mar 14 · 5:30 PM PDT",
  },
];
localStorage.setItem("cards", JSON.stringify(cards));

// DISPLAY CARDS ON SCREEN FOO /////////////////////////////////////////////////////////////////
// INSERTING HTML_CARD_BLUEPRINT /////////////////////////////////////////////////////////////////

function displayCards(cards) {
  const cardContainer = document.getElementById("cardContainerSort");
  cardContainer.innerHTML = "";

  if (cards.length === 0) {
    cardContainer.innerHTML = "<p>): No cards match your criteria. :(</p>";
  } else {
    cards.forEach((el) => {
      const userCard = document.createElement("div");
      userCard.className = "card-sort";
      userCard.innerHTML = `
<div class="hr-and-card-wrapper-sort">
  <div class="hr-sort"></div>
  <div class="all-card-sort">
    <div>
      <img src="${el.image}" alt="" class="card-img-sort" />
    </div>
    <div class="card-content-sort">
      <div class="card-date-time-sort">
        <p class="card-date-txt-sort">${el.date}</p>
      </div>
      <div class="card-content-sort">
        <h3 class="card-heading-txt-sort">${el.title}</h3>
        <p class="card-topic-txt">
          ${el.categoryName} (${el.distance} km)
        </p>
        <div class="card-bottom-sort">
          <div class="card-bottom-sort">
            <p class="card-topic-txt-sort">${el.participants} going</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      `;
      cardContainer.appendChild(userCard);
    });
  }
}

// GETTING CARDS WITH A SITE LOADING ////////////////////////////////////////////////////////////
window.addEventListener("load", () => {
  const storedCardsJSON = localStorage.getItem("cards");
  if (storedCardsJSON) {
    try {
      const storedCards = JSON.parse(storedCardsJSON);
      displayCards(storedCards);
    } catch (error) {
      console.error("Error parsing JSON from local storage: ", error);
    }
  } else {
    console.log("No cards found in local storage.");
  }
});

// DROPDOWN ////////////////////////////////////////////////////////////////////////////////////
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");
  const caret = dropdown.querySelector(".caret");

  // Обработчик клика на select
  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });

  // Обработчик клика на опции
  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");

      options.forEach((opt) => {
        opt.classList.remove("active");
      });
      option.classList.add("active");

      filterCards();
    });
  });
});

document.addEventListener("click", (event) => {
  dropdowns.forEach((dropdown) => {
    const select = dropdown.querySelector(".select");
    const menu = dropdown.querySelector(".menu");
    const caret = dropdown.querySelector(".caret");

    // Если клик был вне dropdown, то закрываем меню
    if (
      !dropdown.contains(event.target) &&
      menu.classList.contains("menu-open")
    ) {
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
    }
  });
});

// FILTER FOO /////////////////////////////////////////////////////////////////////////////////
function filterCards() {
  const distance =
    document.querySelector("#distanceDropdown .menu .active")?.dataset.value ||
    "";
  const type =
    document.querySelector("#typeDropdown .menu .active")?.dataset.value || "";
  const category =
    document.querySelector("#categoryDropdown .menu .active")?.dataset.value ||
    "";

  const storedCardsJSON = localStorage.getItem("cards");
  if (storedCardsJSON) {
    try {
      const storedCards = JSON.parse(storedCardsJSON);
      const filteredCards = storedCards.filter((card) => {
        const sameDistance = distance
          ? card.distance === parseInt(distance)
          : true;
        const sameType = type ? card.type === parseInt(type) : true;
        const sameCategory = category
          ? card.category === parseInt(category)
          : true;
        return sameDistance && sameType && sameCategory;
      });

      displayCards(filteredCards);
    } catch (error) {
      console.error("Error parsing JSON from localStorage: ", error);
    }
  } else {
    console.log("No cards found in localStorage.");
  }
}
