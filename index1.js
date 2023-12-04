(function() {
    // Array of cities for suggestions (replace this with your actual data)
    var cities = ["New York", "Paris", "Tokyo", "London", "Berlin", "Sydney"];

    // Function to show suggestions based on user input
    function searchCities() {
        var searchQuery = $('#searchInput').val().toLowerCase();
        var filteredCities = cities.filter(function(city) {
            return city.toLowerCase().includes(searchQuery);
        });

        displaySuggestions(filteredCities);
    }

    // Function to display suggestions
    function displaySuggestions(suggestions) {
        var suggestionsContainer = $('#suggestions');
        suggestionsContainer.empty();

        if (suggestions.length > 0) {
            var ul = $('<ul>');

            suggestions.forEach(function(city) {
                var li = $('<li>');
                var link = $('<a>').text(city).attr('href', 'https://example.com/' + encodeURIComponent(city));
                
                // Open the link in a new tab/window
                link.attr('target', '_blank');

                li.append(link);
                ul.append(li);
            });

            suggestionsContainer.append(ul);
        } else {
            suggestionsContainer.text('No matching cities found.');
        }
    }

    window.searchCities = searchCities;
})();
