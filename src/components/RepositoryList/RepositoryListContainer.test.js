import React from 'react';
import { render } from '@testing-library/react-native';
import { RepositoryListContainer }  from './index';


describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
        it('renders repository information correctly', () => {
            const repositories = {
                pageInfo: {
                    totalCount: 8,
                    hasNextPage: true,
                    endCursor:
                        'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                },
                edges: [
                    {
                        node: {
                            id: 'jaredpalmer.formik',
                            fullName: 'jaredpalmer/formik',
                            description: 'Build forms in React, without the tears',
                            language: 'TypeScript',
                            forksCount: 1619,
                            stargazersCount: 21856,
                            ratingAverage: 88,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars2.githubusercontent.com/u/4060187?v=4',
                        },
                        cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                    },
                    {
                        node: {
                            id: 'async-library.react-async',
                            fullName: 'async-library/react-async',
                            description: 'Flexible promise-based React data loader',
                            language: 'JavaScript',
                            forksCount: 69,
                            stargazersCount: 1760,
                            ratingAverage: 72,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars1.githubusercontent.com/u/54310907?v=4',
                        },
                        cursor:
                            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    },
                ],
            };

            const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);
            const repositoryNames = getAllByTestId('repositoryNameText');
            expect(repositoryNames[0].props.children).toBe('jaredpalmer/formik');
            expect(repositoryNames[1].props.children).toBe('async-library/react-async');

            const repositoryDescriptions = getAllByTestId('repositoryDescriptionText');
            expect(repositoryDescriptions[0].props.children).toBe('Build forms in React, without the tears');
            expect(repositoryDescriptions[1].props.children).toBe('Flexible promise-based React data loader');

            const repositoryLanguages = getAllByTestId('repositoryLanguageText');
            expect(repositoryLanguages[0].props.children).toBe('TypeScript');
            expect(repositoryLanguages[1].props.children).toBe('JavaScript');

            const repositoryStars = getAllByTestId('repositoryStars');
            expect(repositoryStars[0].props.children).toBe('21.9k');
            expect(repositoryStars[1].props.children).toBe('1.8k');
            
            const repositoryForks = getAllByTestId('repositoryForks');
            expect(repositoryForks[0].props.children).toBe('1.6k');
            expect(repositoryForks[1].props.children).toBe(69);

            const repositoryReviews = getAllByTestId('repositoryReviews');
            expect(repositoryReviews[0].props.children).toBe(3);
            expect(repositoryReviews[1].props.children).toBe(3);

            const repositoryRatings = getAllByTestId('repositoryRating');
            expect(repositoryRatings[0].props.children).toBe(88);
            expect(repositoryRatings[1].props.children).toBe(72);

        });
    });
});