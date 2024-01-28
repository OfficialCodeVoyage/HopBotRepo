import Image from "next/image";
export const Loader = () => {
    return (
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">
            <div className="w-14 h-14 relative animate-spin">
                <Image
                    alt="mascot"
                    fill
                    src="/hopbird2.png"
                />
            </div>
            <p className="text-m text-muted-foreground">
                HopBot is thinking...
            </p>
        </div>
    );
}