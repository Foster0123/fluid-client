import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        'type-enum': [
            2, 
            'always',
            [
                'feat',      // New Features
                'fix',       // Bug Fixes
                'chore',     // Maintenance Tasks
                'ci',        // CI Configuration Changes
                'docs',      // Documentation Updates
                'perf',      // Performance Improvements
                'refractor', // Code Refractoring
                'revert',    // Revert To Previous Commit
                'style',     // Code Style Changes
                'test'       // Adding or Updating Tests
            ]
        ]
    }
}

module.exports = Configuration;