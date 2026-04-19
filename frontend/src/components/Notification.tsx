import React from 'react';
import { Heart, Music, PlayCircle } from 'lucide-react';

const notifications = [
    {
        id: 1,
        type: 'release',
        title: 'New Release',
        message: 'Skrillex just dropped a new single.',
        time: '2h ago',
        unread: true,
        icon: Music,
        color: 'text-blue-500',
        bg: 'bg-blue-500/10'
    },
    {
        id: 2,
        type: 'like',
        title: 'New Follower',
        message: 'Alex liked your "Chill Vibes" playlist.',
        time: '5h ago',
        unread: true,
        icon: Heart,
        color: 'text-rose-500',
        bg: 'bg-rose-500/10'
    },
    {
        id: 3,
        type: 'playlist',
        title: 'Weekly Discovery',
        message: 'Your personalized mix is ready to play.',
        time: '1d ago',
        unread: false,
        icon: PlayCircle,
        color: 'text-emerald-500',
        bg: 'bg-emerald-500/10'
    }
];

interface NotificationProps {
    onClose?: () => void;
}

const Notification: React.FC<NotificationProps> = () => {
    return (
        <div className="absolute top-[calc(100%+0.5rem)] right-0 w-80 max-h-[85vh] overflow-y-auto rounded-2xl bg-background/95 backdrop-blur-3xl border border-border/50 shadow-2xl z-50 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="sticky top-0 z-10 flex items-center justify-center px-4 py-3 bg-background/95 backdrop-blur-xl border-b border-border/50">
                <h3 className="text-sm font-semibold text-foreground flex gap-2">
                    Notifications
                </h3>
            </div>

            <div className="flex flex-col p-2 gap-1">
                {notifications.map((notification) => (
                    <div key={notification.id} className={`flex gap-4 p-3 rounded-xl transition-all duration-200 cursor-pointer hover:bg-secondary/50 group ${notification.unread ? 'bg-secondary/30' : ''}`}>
                        <div className={`mt-0.5 flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${notification.bg} ${notification.color} shadow-inner`}>
                            <notification.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 space-y-1">
                            <div className="flex items-start justify-between gap-2">
                                <p className={`text-sm font-medium leading-none ${notification.unread ? 'text-foreground' : 'text-foreground/80'}`}>
                                    {notification.title}
                                </p>
                                <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                                    {notification.time}
                                </span>
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                                {notification.message}
                            </p>
                        </div>
                        {notification.unread && (
                            <div className="flex-shrink-0 flex items-center justify-center pt-1.5">
                                <div className="h-2 w-2 rounded-full bg-primary" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notification;