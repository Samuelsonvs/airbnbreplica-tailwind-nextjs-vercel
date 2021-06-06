import React from "react";

export default function index() {
    return (
        <div className="h-full w-full object-cover">
            <picture className="z-0">
                <source
                    srcSet="https://a0.muscache.com/im/pictures/415fe2dc-98a1-4565-a702-70b03ae757d7.jpg?im_w=2560 1x, https://a0.muscache.com/im/pictures/415fe2dc-98a1-4565-a702-70b03ae757d7.jpg?im_w=2560 2x"
                    media="(min-width: 1440px)"
                />
                <source
                    srcSet="https://a0.muscache.com/im/pictures/415fe2dc-98a1-4565-a702-70b03ae757d7.jpg?im_w=960 1x, https://a0.muscache.com/im/pictures/415fe2dc-98a1-4565-a702-70b03ae757d7.jpg?im_w=1920 2x"
                    media="(min-width: 950px)"
                />
                <source
                    srcSet="https://a0.muscache.com/im/pictures/090a6d00-576a-465e-b946-8d26ebedbe10.jpg?im_w=720 1x, https://a0.muscache.com/im/pictures/090a6d00-576a-465e-b946-8d26ebedbe10.jpg?im_w=1440 2x"
                    media="(min-width: 744px)"
                />
                <source srcSet="https://a0.muscache.com/im/pictures/8096fa47-0535-49d2-9aca-8db39b3faacd.jpg?im_w=320 1x, https://a0.muscache.com/im/pictures/8096fa47-0535-49d2-9aca-8db39b3faacd.jpg?im_w=720 2x" />
                <img
                    className="absolute object-cover overflow-hidden align-bottom left-0 right-0 w-full z-0"
                    aria-hidden="true"
                    alt=""
                    id="FMP-target"
                    src="https://a0.muscache.com/im/pictures/8096fa47-0535-49d2-9aca-8db39b3faacd.jpg?im_q=highq&amp;im_w=720"
                />
            </picture>
        </div>
    );
}
