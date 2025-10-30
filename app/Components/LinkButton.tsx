export default function LinkButton({
    href,
    text,
    SvgIcon,
}: {
    href: string;
    text: string;
    SvgIcon?: React.ReactNode;
}) {
    return (
        <div>
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex h-14 w-full items-center rounded-full bg-foreground px-5"
            >
                {SvgIcon && (
                    <div className="absolute left-4 flex items-center">
                        {SvgIcon}
                    </div>
                )}
                <div className="flex w-full justify-center">
                    <span>{text}</span>
                </div>
            </a>
        </div>
    );
}
