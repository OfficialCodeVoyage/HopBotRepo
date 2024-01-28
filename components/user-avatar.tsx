
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar";

export const UserAvatar = () => {
    const user = { firstName: 'Blue', lastName: 'Jay', profileImageUrl: '/hopbird.jpg' };

    return (
        <Avatar className="h-8 w-8">
            <AvatarImage src={user?.profileImageUrl} />
            <AvatarFallback>
                {user?.firstName?.charAt(0)}
                {user?.lastName?.charAt(0)}
            </AvatarFallback>
        </Avatar>
    );
};