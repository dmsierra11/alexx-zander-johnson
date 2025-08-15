import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

interface Event {
  id: string;
  date: string;
  venue: string;
  location: string;
  ticketUrl?: string;
  status: 'upcoming' | 'sold-out' | 'cancelled';
}

const events: Event[] = [
  {
    id: '1',
    date: 'Feb 15, 2025',
    venue: 'Razzmatazz',
    location: 'Barcelona, Spain',
    ticketUrl: 'https://www.razzmatazz.com/tickets',
    status: 'upcoming'
  },
  {
    id: '2',
    date: 'Feb 28, 2025',
    venue: 'Warehouse Club',
    location: 'Berlin, Germany',
    ticketUrl: 'https://warehouse-berlin.com/tickets',
    status: 'upcoming'
  },
  {
    id: '3',
    date: 'Mar 12, 2025',
    venue: 'Phasefour Ghent',
    location: 'Ghent, Belgium',
    status: 'sold-out'
  },
  {
    id: '4',
    date: 'Mar 20, 2025',
    venue: 'Fabric',
    location: 'London, UK',
    ticketUrl: 'https://fabriclondon.com/tickets',
    status: 'upcoming'
  },
  {
    id: '5',
    date: 'Apr 05, 2025',
    venue: 'Watergate',
    location: 'Berlin, Germany',
    ticketUrl: 'https://watergate.de/tickets',
    status: 'upcoming'
  }
];

export function EventsSection() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'text-neon-teal';
      case 'sold-out':
        return 'text-neon-purple';
      case 'cancelled':
        return 'text-destructive';
      default:
        return 'text-muted-foreground';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'Tickets Available';
      case 'sold-out':
        return 'Sold Out';
      case 'cancelled':
        return 'Cancelled';
      default:
        return '';
    }
  };

  return (
    <section id="events" className="py-20 px-6 bg-cinematic-dark/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Upcoming Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience underground electronic music in the world's most iconic venues
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {events.map((event) => (
            <Card 
              key={event.id}
              className="bg-card/30 border-border/20 hover:border-neon-purple/30 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-neon-purple" />
                      <span className="text-foreground font-semibold">
                        {event.date}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {event.venue}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        {event.location}
                      </span>
                    </div>
                    
                    <span className={`text-sm font-semibold ${getStatusColor(event.status)}`}>
                      {getStatusText(event.status)}
                    </span>
                  </div>

                  <div className="flex-shrink-0">
                    {event.ticketUrl && event.status === 'upcoming' ? (
                      <Button
                        className="bg-neon-teal hover:bg-neon-teal/80 text-black font-semibold"
                        onClick={() => window.open(event.ticketUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Get Tickets
                      </Button>
                    ) : (
                      <Button
                        variant="ghost"
                        disabled
                        className="text-muted-foreground cursor-not-allowed"
                      >
                        {event.status === 'sold-out' ? 'Sold Out' : 'Unavailable'}
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline"
            size="lg"
            className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black px-8 py-3 font-semibold"
            onClick={() => window.open('https://alexxzanderjohnson.com/events', '_blank')}
          >
            See All Events
          </Button>
        </div>
      </div>
    </section>
  );
}
