const Discord = require('discord.js');
const bot = new Discord.Client();
const ping = require('minecraft-server-util');
const token = '';
const PREFIX = '!';
bot.on('ready', () => {
    console.log('Bot online.');
});
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(' ');
    switch (args[0]) {
        case 'mc':
            ping.status('nullisblack.mooo.com', { port: 25565, enableSRV: true, timeout: 5000, protocolVersion: 47 }) // These are the default options
                .then((response) => {
                const Embed = new Discord.MessageEmbed()
                    .setTitle('Server Status')
                    .addField('Server IP', response.host)
                    .addField('Server Version', response.version)
                    .addField('Online Players', response.onlinePlayers)
                    .addField('Max Players', response.maxPlayers);
                message.channel.send(Embed);
            })
                .catch((error) => {
                throw error;
            });
            break;
        case 'ip':
            message.channel.send('nullisblack.mooo.com');
            break;
        case 'git':
            message.channel.send("https://github.com/13jon37/minecraft-bot");
            break;
    }
});
bot.login(token);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFdEMsTUFBTSxHQUFHLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFakMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFFOUMsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBRWpCLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQztBQUVuQixHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7SUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxFQUFFO0lBQ3hCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFL0QsUUFBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDWixLQUFLLElBQUk7WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLHNCQUFzQixFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsZ0NBQWdDO2lCQUNySSxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDZixNQUFNLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7cUJBQ3ZDLFFBQVEsQ0FBQyxlQUFlLENBQUM7cUJBQ3pCLFFBQVEsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQztxQkFDcEMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUM7cUJBQzVDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDO3FCQUNsRCxRQUFRLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFFOUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDO2lCQUNGLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNiLE1BQU0sS0FBSyxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsTUFBTTtRQUVOLEtBQUssSUFBSTtZQUNMLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDakQsTUFBTTtRQUVOLEtBQUssS0FBSztZQUNOLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDBDQUEwQyxDQUFDLENBQUM7WUFDckUsTUFBTTtLQUNUO0FBRUwsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRGlzY29yZCA9IHJlcXVpcmUoJ2Rpc2NvcmQuanMnKTtcblxuY29uc3QgYm90ID0gbmV3IERpc2NvcmQuQ2xpZW50KCk7XG5cbmNvbnN0IHBpbmcgPSByZXF1aXJlKCdtaW5lY3JhZnQtc2VydmVyLXV0aWwnKTtcblxuY29uc3QgdG9rZW4gPSAnJztcblxuY29uc3QgUFJFRklYID0gJyEnO1xuXG5ib3Qub24oJ3JlYWR5JywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdCb3Qgb25saW5lLicpO1xufSk7XG5cbmJvdC5vbignbWVzc2FnZScsIG1lc3NhZ2UgPT4ge1xuICAgIGxldCBhcmdzID0gbWVzc2FnZS5jb250ZW50LnN1YnN0cmluZyhQUkVGSVgubGVuZ3RoKS5zcGxpdCgnICcpO1xuXG4gICAgc3dpdGNoKGFyZ3NbMF0pIHtcbiAgICAgICAgY2FzZSAnbWMnOlxuICAgICAgICAgICAgcGluZy5zdGF0dXMoJ251bGxpc2JsYWNrLm1vb28uY29tJywgeyBwb3J0OiAyNTU2NSwgZW5hYmxlU1JWOiB0cnVlLCB0aW1lb3V0OiA1MDAwLCBwcm90b2NvbFZlcnNpb246IDQ3IH0pIC8vIFRoZXNlIGFyZSB0aGUgZGVmYXVsdCBvcHRpb25zXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IEVtYmVkID0gbmV3IERpc2NvcmQuTWVzc2FnZUVtYmVkKClcbiAgICAgICAgICAgICAgICAgICAgLnNldFRpdGxlKCdTZXJ2ZXIgU3RhdHVzJylcbiAgICAgICAgICAgICAgICAgICAgLmFkZEZpZWxkKCdTZXJ2ZXIgSVAnLCByZXNwb25zZS5ob3N0KVxuICAgICAgICAgICAgICAgICAgICAuYWRkRmllbGQoJ1NlcnZlciBWZXJzaW9uJywgcmVzcG9uc2UudmVyc2lvbilcbiAgICAgICAgICAgICAgICAgICAgLmFkZEZpZWxkKCdPbmxpbmUgUGxheWVycycsIHJlc3BvbnNlLm9ubGluZVBsYXllcnMpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRGaWVsZCgnTWF4IFBsYXllcnMnLCByZXNwb25zZS5tYXhQbGF5ZXJzKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5jaGFubmVsLnNlbmQoRW1iZWQpO1xuICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnaXAnOlxuICAgICAgICAgICAgbWVzc2FnZS5jaGFubmVsLnNlbmQoJ251bGxpc2JsYWNrLm1vb28uY29tJyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2dpdCc6XG4gICAgICAgICAgICBtZXNzYWdlLmNoYW5uZWwuc2VuZChcImh0dHBzOi8vZ2l0aHViLmNvbS8xM2pvbjM3L21pbmVjcmFmdC1ib3RcIik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBcbn0pO1xuXG5ib3QubG9naW4odG9rZW4pOyJdfQ==