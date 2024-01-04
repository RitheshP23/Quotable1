"use client";
import React from 'react'

type Props = {
    setInputVal: React.Dispatch<React.SetStateAction<string>>
}

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";
import { suggestions, otherCategories } from '@/constants';

export default function SelectCategory({ setInputVal }: Props) {
    return (
        <Command className="max-w-md">
            <CommandInput
                placeholder="Search Your Category..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>

                <CommandGroup heading="Suggestions">
                    {suggestions.map(suggestions => (
                        <CommandItem
                            key={suggestions}
                            onSelect={(value: string) => setInputVal(value)}
                            className="cursor-pointer capitalize">
                            {suggestions}
                        </CommandItem>
                    ))}

                </CommandGroup>
                <CommandSeparator />

                <CommandGroup heading="Other Categories">
                    {otherCategories.map(categ => (
                        <CommandItem
                            key={categ}
                            onSelect={(value: string) => setInputVal(value)}
                            className="cursor-pointer capitalize"
                        >
                            {categ}
                        </CommandItem>
                    ))}
                </CommandGroup>

            </CommandList>
        </Command>
    )
}