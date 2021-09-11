const scrapeIt = require("scrape-it");

async function getChart(user) {
  return await scrapeIt(`https://github.com/${user}`, {
    contributions: {
      listItem:
        "svg.js-calendar-graph-svg g[transform='translate(10, 20)'] g[transform]",
      data: {
        week: {
          listItem: "rect",
          data: {
            date: {
              attr: "data-date",
            },
            count: {
              attr: "data-count",
            },
            level: {
              attr: "data-level",
            },
          },
        },
      },
    },
  });
}

module.exports = getChart;
