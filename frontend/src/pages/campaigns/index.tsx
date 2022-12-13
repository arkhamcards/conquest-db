import React, { useCallback } from 'react';
import { Box } from '@chakra-ui/react';
import { t } from '@lingui/macro';
import { flatMap } from 'lodash';

import PageHeading from '../../components/PageHeading';
import { useRequireAuth } from '../../lib/hooks';
import { Campaign, CampaignFragment, useGetMyCampaignsQuery, useGetMyCampaignsTotalQuery } from '../../generated/graphql/apollo-schema';
import { useAuth } from '../../lib/AuthContext';
import PaginationWrapper from '../../components/PaginationWrapper';
import { AuthUser } from '../../lib/useFirebaseAuth';
import { CampaignList } from '../../components/Campaign';

export default function CampaignsList() {
  useRequireAuth();
  const { authUser } = useAuth();
  const { data: totalCampaigns } = useGetMyCampaignsTotalQuery({
    variables: {
      userId: authUser?.uid || '',
    },
    skip: !authUser,
  })
  const { fetchMore } = useGetMyCampaignsQuery({
    variables: {
      userId: authUser?.uid || '',
      limit: 10,
      offset: 0,
    },
    skip: true,
  });

  const fetchCampaigns = useCallback(async(authUser: AuthUser, pageSize: number, offset: number): Promise<CampaignFragment[]> => {
    if (authUser) {
      const data = await fetchMore({
        variables: {
          userId: authUser.uid,
          limit: pageSize,
          offset,
        },
      });
      return flatMap(data.data.user?.campaigns || [], c => c.campaign || []);
    }
    return [];
  }, [fetchMore]);
  return (
    <Box
      maxW="64rem"
      marginX="auto"
      py={{ base: "3rem", lg: "4rem" }}
      px={{ base: "1rem", lg: "0" }}
    >
      <PageHeading title={t`Campaigns`} />
      <PaginationWrapper
        total={totalCampaigns?.user?.campaigns_aggregate.aggregate?.count}
        fetchData={fetchCampaigns}
      >
        { (campaigns: CampaignFragment[]) => (
            <CampaignList
              campaigns={campaigns}
            />
        ) }
      </PaginationWrapper>
    </Box>
  );
}