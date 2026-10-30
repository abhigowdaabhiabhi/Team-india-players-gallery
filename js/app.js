
const players = [
    { name: "Virat Kohli", role: "Batter", jersey: 18, image: "virat-kohli.jpg" },
    { name: "Rohit Sharma", role: "Batter", jersey: 45, image: "rohit-sharma.jpg" },
    { name: "Shubman Gill", role: "Batter", jersey: 77, image: "shubman-gill.jpg" },
    { name: "Jasprit Bumrah", role: "Bowler", jersey: 93, image: "jasprit-bumrah.jpg" },
    { name: "Hardik Pandya", role: "All-rounder", jersey: 33, image: "hardik-pandya.jpg" },
    { name: "Ravindra Jadeja", role: "All-rounder", jersey: 8, image: "ravindra-jadeja.jpg" },
    { name: "KL Rahul", role: "Wicketkeeper", jersey: 1, image: "kl-rahul.jpg" },
    { name: "Rishabh Pant", role: "Wicketkeeper", jersey: 17, image: "rishabh-pant.jpg" },
    { name: "Suryakumar Yadav", role: "Batter", jersey: 63, image: "suryakumar-yadav.jpg" },
    { name: "Kuldeep Yadav", role: "Bowler", jersey: 23, image: "kuldeep-yadav.jpg" },
    { name: "Axar Patel", role: "All-rounder", jersey: 20, image: "axar-patel.jpg" },
    { name: "Yashasvi Jaiswal", role: "Batter", jersey: 64, image: "yashasvi-jaiswal.jpg" }
];

const grid = document.getElementById("playerGrid");
const search = document.getElementById("searchInput");
const filter = document.getElementById("roleFilter");
const emptyMessage = document.getElementById("emptyMessage");

function displayPlayers() {
    const keyword = search.value.toLowerCase().trim();
    const selectedRole = filter.value;

    const filtered = players.filter(player =>
        player.name.toLowerCase().includes(keyword) &&
        (selectedRole === "All" || player.role === selectedRole)
    );

    grid.innerHTML = "";

    filtered.forEach(player => {
        const card = document.createElement("article");
        card.className = "player-card";

        const img = document.createElement("img");
        img.src = `images/${player.image}`;
        img.alt = player.name;
        img.loading = "lazy";

        img.onerror = () => {
            img.onerror = null;
            img.src = "images/player-placeholder.svg";
        };

        const info = document.createElement("div");
        info.className = "player-info";

        const name = document.createElement("h3");
        name.textContent = player.name;

        const role = document.createElement("p");
        role.className = "player-role";
        role.textContent = player.role;

        const jersey = document.createElement("p");
        jersey.className = "jersey";
        jersey.textContent = `Jersey No: ${player.jersey}`;

        info.append(name, role, jersey);
        card.append(img, info);
        grid.appendChild(card);
    });

    emptyMessage.hidden = filtered.length !== 0;
}

search.addEventListener("input", displayPlayers);
filter.addEventListener("change", displayPlayers);

displayPlayers();

