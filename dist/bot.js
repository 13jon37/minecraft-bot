const Discord = require('discord.js');
const bot = new Discord.Client();
const ping = require('minecraft-server-util');
const token = 'NzUzMzY5MzEyMDA5NTE5MjI1.X1lL2A.kckVMSx8OLqdSTYKBeiY52UohFI';
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
    }
});
bot.login(token);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUE7QUFFckMsTUFBTSxHQUFHLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUE7QUFFaEMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUE7QUFFN0MsTUFBTSxLQUFLLEdBQUcsNkRBQTZELENBQUE7QUFFM0UsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFBO0FBRWxCLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtJQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0FBQzlCLENBQUMsQ0FBQyxDQUFBO0FBRUYsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEVBQUU7SUFDeEIsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUU5RCxRQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNaLEtBQUssSUFBSTtZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxnQ0FBZ0M7aUJBQ3JJLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUNmLE1BQU0sS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtxQkFDdkMsUUFBUSxDQUFDLGVBQWUsQ0FBQztxQkFDekIsUUFBUSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDO3FCQUNwQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQztxQkFDNUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUM7cUJBQ2xELFFBQVEsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFBO2dCQUU3QyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUM5QixDQUFDLENBQUM7aUJBQ0YsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ2IsTUFBTSxLQUFLLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUE7WUFDTixNQUFLO0tBQ1I7QUFFTCxDQUFDLENBQUMsQ0FBQTtBQUVGLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBEaXNjb3JkID0gcmVxdWlyZSgnZGlzY29yZC5qcycpXG5cbmNvbnN0IGJvdCA9IG5ldyBEaXNjb3JkLkNsaWVudCgpXG5cbmNvbnN0IHBpbmcgPSByZXF1aXJlKCdtaW5lY3JhZnQtc2VydmVyLXV0aWwnKVxuXG5jb25zdCB0b2tlbiA9ICdOelV6TXpZNU16RXlNREE1TlRFNU1qSTEuWDFsTDJBLmtja1ZNU3g4T0xxZFNUWUtCZWlZNTJVb2hGSSdcblxuY29uc3QgUFJFRklYID0gJyEnXG5cbmJvdC5vbigncmVhZHknLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0JvdCBvbmxpbmUuJylcbn0pXG5cbmJvdC5vbignbWVzc2FnZScsIG1lc3NhZ2UgPT4ge1xuICAgIGxldCBhcmdzID0gbWVzc2FnZS5jb250ZW50LnN1YnN0cmluZyhQUkVGSVgubGVuZ3RoKS5zcGxpdCgnICcpXG5cbiAgICBzd2l0Y2goYXJnc1swXSkge1xuICAgICAgICBjYXNlICdtYyc6XG4gICAgICAgICAgICBwaW5nLnN0YXR1cygnbnVsbGlzYmxhY2subW9vby5jb20nLCB7IHBvcnQ6IDI1NTY1LCBlbmFibGVTUlY6IHRydWUsIHRpbWVvdXQ6IDUwMDAsIHByb3RvY29sVmVyc2lvbjogNDcgfSkgLy8gVGhlc2UgYXJlIHRoZSBkZWZhdWx0IG9wdGlvbnNcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgRW1iZWQgPSBuZXcgRGlzY29yZC5NZXNzYWdlRW1iZWQoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0VGl0bGUoJ1NlcnZlciBTdGF0dXMnKVxuICAgICAgICAgICAgICAgICAgICAuYWRkRmllbGQoJ1NlcnZlciBJUCcsIHJlc3BvbnNlLmhvc3QpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRGaWVsZCgnU2VydmVyIFZlcnNpb24nLCByZXNwb25zZS52ZXJzaW9uKVxuICAgICAgICAgICAgICAgICAgICAuYWRkRmllbGQoJ09ubGluZSBQbGF5ZXJzJywgcmVzcG9uc2Uub25saW5lUGxheWVycylcbiAgICAgICAgICAgICAgICAgICAgLmFkZEZpZWxkKCdNYXggUGxheWVycycsIHJlc3BvbnNlLm1heFBsYXllcnMpXG4gICAgXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKEVtYmVkKVxuICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9KVxuICAgICAgICBicmVha1xuICAgIH1cbiAgICBcbn0pXG5cbmJvdC5sb2dpbih0b2tlbikiXX0=