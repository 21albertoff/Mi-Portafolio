window.addEventListener('DOMContentLoaded', async function() {
    async function get(url) {
      const resp = await fetch(url);
      return resp.json();
    }
  
    const emojis = await get('https://api.github.com/emojis');
    const colors = await get('https://raw.githubusercontent.com/ozh/github-colors/master/colors.json');
  
    const themes = {
      'light-default': {
        background: 'white',
        borderColor: '#e1e4e8',
        color: '#586069',
        linkColor: '#0366d6',
      },
      'dark-default': {
        background: 'rgb(13, 17, 23)',
        borderColor: 'rgb(48, 54, 61)',
        color: 'rgb(139, 148, 158)',
        linkColor: 'rgb(88, 166, 255)',
      }
    };
  
    document.querySelectorAll('.repo-card').forEach(async function(el) {
      const name = el.getAttribute('data-repo');
      const theme = themes[el.getAttribute('data-theme') || 'light-default'];
      const data = await get(`https://api.github.com/repos/${name}`);
  
      data.description = (data.description || '').replace(/:\w+:/g, function(match) {
        const name = match.substring(1, match.length - 1);
        const emoji = emojis[name];
  
        if (emoji) {
          return `<span><img src="${emoji}" style="width: 1rem; height: 1rem; vertical-align: -0.2rem;"></span>`;
        }
  
        return match;
      });
  
      el.innerHTML = `
      <div class="single-plan text-center">
          <div class="top-plan">
              <a href="${data.html_url}" target="_blank"><h2>${data.name}</h2></a>
              <div class="plan-list">
                  <p>${data.description}</p>
              </div>
              <span> <p>
                <span class="language-color" style="background-color: ${data.language ? colors[data.language].color : ''};"></span>
               ${data.language} </p>
              </span>
              <span>
                <svg aria-hidden="true" class="octicon repo-star-svg" height="20" role="img" viewBox="0 0 10 16" width="12" fill="rgb(106, 115, 125)">
                    <path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path>
                </svg>
                ${data.forks} 
              </span>
              <span>
                <svg aria-hidden="true" class="octicon repo-star-svg" height="20" role="img" viewBox="0 0 14 16" width="14" fill="rgb(106, 115, 125)">
                    <path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
                </svg>
                ${data.stargazers_count} 
              </span>
          </div>
        
      </div>
      `;
    });
  });
