const menuItems = [
  {
    name: "Mayo Garlic Fries",
    price: "$4.99",
    category: "Starters",
    description: "Crispy fries tossed with creamy garlic mayo.",
  },
  { name: "Fries", price: "$3.99", category: "Starters", description: "A basket of crisp golden fries." },
  { name: "Masala Fries", price: "$4.99", category: "Starters", description: "Fries with our house masala." },
  { name: "Aloo Samosa", price: "$4.99", category: "Starters", description: "Golden potato-filled pastry." },
  { name: "Chicken Nuggets", price: "$7.99", category: "Starters", description: "Eight pieces served with fries." },
  { name: "Chicken Cheese Spring Rolls", price: "$6.99", category: "Starters", description: "Three pieces." },
  { name: "Beef Spring Rolls", price: "$7.99", category: "Starters", description: "Three pieces." },
  { name: "Papdi Chaat", price: "$9.99", category: "Starters", description: "Crunchy, tangy, sweet, and savory." },
  { name: "Gol Gappa", price: "$7.99", category: "Starters", description: "Crisp puri with bright, tangy fillings." },
  { name: "Chicken Wings", price: "$13.99", category: "Starters", description: "Buffalo, hot, or garlic." },
  { name: "Chicken Lollipop", price: "$16.99", category: "Starters", description: "Six pieces." },
  { name: "Dynamite Chicken", price: "$15.99", category: "Starters", description: "Crispy chicken in a creamy, spicy sauce." },
  { name: "Hakka Noodles", price: "$14.99", category: "Starters", description: "Choice of chicken or vegetable." },
  { name: "Szechuan Noodles", price: "$14.99", category: "Starters", description: "Choice of chicken or vegetable." },
  { name: "Masala Maggi", price: "$4.99", category: "Starters", description: "Instant noodles tossed with lively masala." },
  { name: "Chicken Maggi", price: "$6.99", category: "Starters", description: "Instant noodles with seasoned chicken." },
  { name: "Hot and Sour Soup", price: "$7.99", category: "Starters", description: "One size; choice of chicken or vegetable." },
  { name: "Sweet Corn Soup", price: "$7.99", category: "Starters", description: "One size; choice of chicken or vegetable." },

  { name: "Aloo Tikki Burger", price: "$12.99", category: "Burgers & Rolls", description: "Vegetarian potato patty burger." },
  { name: "Anday Wala Bun Kabab", price: "$13.99", category: "Burgers & Rolls", description: "A Karachi street-food classic." },
  { name: "Chicken Tikka Burger", price: "$13.99", category: "Burgers & Rolls", description: "Smoky tikka flavor on a bun." },
  { name: "Beef Smash Burger", price: "$14.99", category: "Burgers & Rolls", description: "Seared beef with crisp edges." },
  { name: "Chicken Club Sandwich", price: "$17.99", category: "Burgers & Rolls", description: "A stacked, satisfying classic." },
  { name: "Malai Chicken Burger", price: "$13.99", category: "Burgers & Rolls", description: "Creamy, gently spiced chicken." },
  { name: "Zinger Burger with Fries", price: "$14.99", category: "Burgers & Rolls", description: "Crispy chicken with a side of fries." },
  { name: "Aflatoon Burger with Funkaar Fries", price: "$17.99", category: "Burgers & Rolls", description: "Our playful house burger and fries." },
  { name: "Garlic Mayo Chicken Roll", price: "$13.99", category: "Burgers & Rolls", description: "Paratha roll served with seasoned fries." },
  { name: "Mayo Zinger Paratha Roll", price: "$13.99", category: "Burgers & Rolls", description: "Crispy chicken wrapped in flaky paratha." },
  { name: "Chicken Seekh Kabab Roll", price: "$13.99", category: "Burgers & Rolls", description: "Chicken seekh kabab in flaky paratha." },
  { name: "Beef Seekh Kabab Roll", price: "$15.99", category: "Burgers & Rolls", description: "Beef seekh kabab in flaky paratha." },
  { name: "Buffalo Chicken Roll", price: "$13.99", category: "Burgers & Rolls", description: "Tangy buffalo chicken in paratha." },
  { name: "Chicken Chutney Roll", price: "$14.99", category: "Burgers & Rolls", description: "Chicken with bright chutney in paratha." },
  { name: "Paneer Masala Roll", price: "$12.99", category: "Burgers & Rolls", description: "Vegetarian paneer wrapped in flaky paratha." },

  { name: "Two-Egg Omelet", price: "$5.99", category: "Karachi Classics", description: "A simple two-egg omelet." },
  { name: "Karachi Nashta", price: "$14.99", category: "Karachi Classics", description: "Halwa poori, chana, and aloo sabzi." },
  { name: "Half-Fry Anda Paratha", price: "$9.99", category: "Karachi Classics", description: "Half-fried egg with flaky paratha." },
  { name: "Daal Fry", price: "$14.99", category: "Karachi Classics", description: "Comforting, seasoned lentils. Served with rice." },
  { name: "Chana Masala", price: "$14.99", category: "Karachi Classics", description: "Spiced chickpeas served with rice." },
  { name: "Vegetable of the Day", price: "$14.99", category: "Karachi Classics", description: "The chef’s daily vegetarian preparation." },
  { name: "Paneer Makhani", price: "$14.99", category: "Karachi Classics", description: "Paneer in a rich, buttery tomato sauce." },
  { name: "Paneer Karahi", price: "$21.99", category: "Karachi Classics", description: "Paneer cooked karahi-style." },
  { name: "Chicken Makhani", price: "$19.99", category: "Karachi Classics", description: "Chicken in a rich, buttery tomato sauce." },
  { name: "Qeema Fry", price: "$19.99", category: "Karachi Classics", description: "Savory spiced minced meat." },
  { name: "Matka Daleem", price: "$19.99", category: "Karachi Classics", description: "Slow-cooked grains, lentils, and meat." },
  { name: "Beef Nihari", price: "$19.99", category: "Karachi Classics", description: "Deeply spiced, slow-cooked beef stew." },
  { name: "Paya", price: "$19.99", category: "Karachi Classics", description: "Traditional slow-simmered curry." },
  { name: "Karachi Chicken Karahi", price: "$34.99", category: "Karachi Classics", description: "Chicken cooked in a bold tomato and spice base." },
  { name: "Black Pepper Chicken Karahi", price: "$34.99", category: "Karachi Classics", description: "Karahi with a fragrant black-pepper kick." },
  { name: "Boneless Chicken Tikka Karahi", price: "$34.99", category: "Karachi Classics", description: "Smoky boneless tikka finished karahi-style." },
  { name: "Chicken Charsi Karahi", price: "$34.99", category: "Karachi Classics", description: "A rustic, tomato-forward karahi." },
  { name: "Karachi Mutton Karahi", price: "$39.99", category: "Karachi Classics", description: "Tender mutton, tomato, ginger, and green chile." },
  { name: "Veg Lunch Box", price: "$11.99", category: "Karachi Classics", description: "Served with dessert and a choice of naan or rice." },
  { name: "Non-Veg Lunch Box", price: "$13.99", category: "Karachi Classics", description: "Served with dessert and a choice of naan or rice." },
  { name: "Crispy Chicken Bites", price: "$6.99", category: "Karachi Classics", description: "Kids’ meal with cookies, juice, and a toy." },
  { name: "Mac and Cheese", price: "$6.99", category: "Karachi Classics", description: "Kids’ meal with cookies, juice, and a toy." },
  { name: "Tandoori Raan", price: "$169.99", category: "Karachi Classics", description: "Special order with naan, zeera rice, raita, and salad. Please order 24 hours ahead." },
  { name: "Goat Sajji", price: "$599.99", category: "Karachi Classics", description: "Special order with naan, zeera rice, raita, and salad. Please order 24 hours ahead." },

  { name: "Chicken Malai Kabab", price: "$15.99", category: "Grill & Rice", description: "Creamy, tender grilled chicken." },
  { name: "Chicken Seekh Kabab", price: "$15.99", category: "Grill & Rice", description: "Seasoned minced chicken grilled on skewers." },
  { name: "Tandoori Chicken Boneless", price: "$17.99", category: "Grill & Rice", description: "Boneless chicken with tandoori spice and char." },
  { name: "Beef Seekh Kabab", price: "$16.99", category: "Grill & Rice", description: "Seasoned minced beef grilled on skewers." },
  { name: "Chicken Seekh Kabab Masala", price: "$17.99", category: "Grill & Rice", description: "Chicken seekh kabab finished in masala." },
  { name: "Beef Bihari Boti", price: "$14.99", category: "Grill & Rice", description: "Tender, intensely seasoned grilled beef." },
  { name: "Grill Chargha", price: "$26.99", category: "Grill & Rice", description: "Whole marinated grilled chicken." },
  { name: "Mixed Tandoori", price: "$26.99", category: "Grill & Rice", description: "A shareable selection from the grill." },
  { name: "Chicken Biryani", price: "$17.99", category: "Grill & Rice", description: "Fragrant basmati rice layered with spiced chicken." },
  { name: "Plain Rice", price: "$4.99", category: "Grill & Rice", description: "Steamed basmati rice." },
  { name: "Plain Naan", price: "$2.99", category: "Grill & Rice", description: "Fresh tandoor-baked bread." },
  { name: "Butter Naan", price: "$2.99", category: "Grill & Rice", description: "Tandoor-baked naan brushed with butter." },
  { name: "Garlic Naan", price: "$3.99", category: "Grill & Rice", description: "Naan topped with aromatic garlic." },
  { name: "Tandoori Roti", price: "$2.99", category: "Grill & Rice", description: "Whole-wheat flatbread from the tandoor." },
  { name: "Plain Paratha", price: "$3.99", category: "Grill & Rice", description: "Pan-cooked flaky flatbread." },
  { name: "Til Wala Naan", price: "$4.99", category: "Grill & Rice", description: "Tandoor-baked naan topped with sesame." },
  { name: "Lachha Paratha", price: "$4.99", category: "Grill & Rice", description: "Flaky, layered flatbread." },
  { name: "Cheese Naan", price: "$5.99", category: "Grill & Rice", description: "Tandoor-baked naan filled with cheese." },

  { name: "Gulab Jamun", price: "$5.99", category: "Desserts & Drinks", description: "Soft milk dumplings in fragrant syrup." },
  { name: "Ras Malai", price: "$5.99", category: "Desserts & Drinks", description: "Soft cheese dumplings in sweetened milk." },
  { name: "Shahi Kheer", price: "$5.99", category: "Desserts & Drinks", description: "Creamy rice pudding with warm aromatics." },
  { name: "Gajar Halwa", price: "$7.99", category: "Desserts & Drinks", description: "Slow-cooked carrot dessert." },
  { name: "Meetha Paan", price: "$3.99", category: "Desserts & Drinks", description: "A sweet, aromatic finish to the meal." },
  { name: "Ice Cream of the Day", price: "$5.99", category: "Desserts & Drinks", description: "Ask about today’s flavor." },
  { name: "Loaded Gola Ganda", price: "$7.99", category: "Desserts & Drinks", description: "Colorful Karachi-style shaved ice." },
  { name: "Falooda", price: "$12.99", category: "Desserts & Drinks", description: "A chilled, layered rose dessert drink." },
  { name: "Mango Sweet Lassi", price: "$4.99", category: "Desserts & Drinks", description: "Creamy mango yogurt drink." },
  { name: "Meethi Lassi", price: "$4.99", category: "Desserts & Drinks", description: "Classic sweet yogurt drink." },
  { name: "Namkeen Lassi", price: "$4.99", category: "Desserts & Drinks", description: "Savory salted yogurt drink." },
  { name: "Water", price: "$1.99", category: "Desserts & Drinks", description: "Bottled water." },
  { name: "Soft Drink", price: "$2.99", category: "Desserts & Drinks", description: "Pakola, Sprite, Coke, or Fanta." },
  { name: "Masala Cola", price: "$4.99", category: "Desserts & Drinks", description: "Cola brightened with savory spice." },
  { name: "Virgin Mojito", price: "$6.99", category: "Desserts & Drinks", description: "A minty, citrusy cooler." },
  { name: "Karachi Chai", price: "$2.99", category: "Desserts & Drinks", description: "Strong, milky house tea." },
  { name: "Kashmiri Chai", price: "$3.99", category: "Desserts & Drinks", description: "Creamy pink tea with warming aromatics." },
  { name: "Tandoori Kulhad Chai", price: "$4.99", category: "Desserts & Drinks", description: "Smoky chai served kulhad-style." },
  { name: "Pina Colada", price: "$6.99", category: "Desserts & Drinks", description: "Creamy pineapple and coconut cooler." },
  { name: "Fresh Juice", price: "$6.99", category: "Desserts & Drinks", description: "Choice of orange, carrot, or apple." },
];

const menuGrid = document.querySelector("[data-menu-grid]");
const menuSearch = document.querySelector("[data-menu-search]");
const menuCount = document.querySelector("[data-menu-count]");
const menuMore = document.querySelector("[data-menu-more]");
const menuMoreWrap = menuMore?.closest(".menu-more-wrap");
const filterButtons = [...document.querySelectorAll("[data-category]")];

let activeCategory = "All";
let searchTerm = "";
let showAll = false;
const initialItemCount = 12;

function escapeHtml(value) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character],
  );
}

function getFilteredItems() {
  const normalizedSearch = searchTerm.trim().toLowerCase();

  return menuItems.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      !normalizedSearch ||
      `${item.name} ${item.description} ${item.category}`.toLowerCase().includes(normalizedSearch);

    return matchesCategory && matchesSearch;
  });
}

function renderMenu() {
  if (!menuGrid || !menuCount) return;

  const filteredItems = getFilteredItems();
  const shouldLimit = activeCategory === "All" && !searchTerm && !showAll;
  const visibleItems = shouldLimit ? filteredItems.slice(0, initialItemCount) : filteredItems;

  menuCount.textContent = `${filteredItems.length} ${filteredItems.length === 1 ? "dish" : "dishes"}`;

  if (menuMoreWrap) {
    menuMoreWrap.hidden = !shouldLimit || filteredItems.length <= initialItemCount;
  }

  if (!visibleItems.length) {
    menuGrid.innerHTML = `
      <div class="menu-empty">
        <strong>No dish found.</strong>
        <span>Try a different search or choose another category.</span>
      </div>
    `;
    return;
  }

  menuGrid.innerHTML = visibleItems
    .map(
      (item) => `
        <article class="menu-item">
          <h3>${escapeHtml(item.name)}</h3>
          <span class="price">${escapeHtml(item.price)}</span>
          <p class="description">${escapeHtml(item.description)}</p>
          <span class="category">${escapeHtml(item.category)}</span>
        </article>
      `,
    )
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    showAll = true;

    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });

    renderMenu();
  });
});

menuSearch?.addEventListener("input", (event) => {
  searchTerm = event.target.value;
  showAll = true;
  renderMenu();
});

menuMore?.addEventListener("click", () => {
  showAll = true;
  renderMenu();
});

const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");

function closeNavigation() {
  if (!nav || !navToggle) return;
  nav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation");
  document.body.classList.remove("nav-open");
}

navToggle?.addEventListener("click", () => {
  const willOpen = navToggle.getAttribute("aria-expanded") !== "true";
  nav?.classList.toggle("is-open", willOpen);
  navToggle.setAttribute("aria-expanded", String(willOpen));
  navToggle.setAttribute("aria-label", willOpen ? "Close navigation" : "Open navigation");
  document.body.classList.toggle("nav-open", willOpen);
});

nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNavigation));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNavigation();
});

window.addEventListener(
  "scroll",
  () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 24);
  },
  { passive: true },
);

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

filterButtons.forEach((button) => {
  button.setAttribute("aria-pressed", String(button.classList.contains("is-active")));
});

renderMenu();
