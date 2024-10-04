import {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";

interface Project {
  link: string;
  icon: ReactElement;
  title2: string;
  description: string;
}
export default function HoverEffect({ items }: { items: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {items.map(
        (
          item: {
            link: string | undefined;
            icon:
              | string
              | number
              | bigint
              | boolean
              | ReactElement<unknown, string | JSXElementConstructor<unknown>>
              | Iterable<ReactNode>
              | ReactPortal
              | Promise<AwaitedReactNode>
              | null
              | undefined;
            title2:
              | string
              | number
              | bigint
              | boolean
              | ReactElement<unknown, string | JSXElementConstructor<unknown>>
              | Iterable<ReactNode>
              | ReactPortal
              | Promise<AwaitedReactNode>
              | null
              | undefined;
            description:
              | string
              | number
              | bigint
              | boolean
              | ReactElement<unknown, string | JSXElementConstructor<unknown>>
              | Iterable<ReactNode>
              | ReactPortal
              | Promise<AwaitedReactNode>
              | null
              | undefined;
          },
          index: Key | null | undefined
        ) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-8 text-center bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col items-center justify-center h-full">
              {item.icon}
              <h3 className="text-xl font-semibold mb-2">{item.title2}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </a>
        )
      )}
    </div>
  );
}
