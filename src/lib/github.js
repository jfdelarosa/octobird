import scrapeIt from 'scrape-it';

async function getChart(user) {
	return await scrapeIt(`https://github.com/${user}`, {
		contributions: {
			listItem: "svg.js-calendar-graph-svg g[transform='translate(10, 20)'] g[transform]",
			data: {
				week: {
					listItem: 'rect',
					data: {
						date: {
							attr: 'data-date'
						},
						count: {
							attr: 'data-count',
							convert: (count) => Number(count)
						},
						level: {
							attr: 'data-level',
							convert: (level) => Number(level)
						}
					}
				}
			}
		}
	});
}

export { getChart };
